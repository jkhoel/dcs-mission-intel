do
  --
  local PORT = 3001
  local DATA_TIMEOUT_SEC = 1

  package.path = package.path..";.\\LuaSocket\\?.lua"
  package.cpath = package.cpath..";.\\LuaSocket\\?.dll"

  require = mint.require
  local socket = require("socket")
  require = nil

  local function log(msg)
    env.info("MINT (t=" .. timer.getTime() .. "): " .. msg)
  end

  local function getDataMessage()
    local msg = "{"

    local function addUnit(unit)
      local unitPosition = unit:getPosition()
      local lat, lon, alt = coord.LOtoLL(unitPosition.p)
      local unitXYZNorthCorr = coord.LLtoLO(lat + 1, lon)
      local headingNorthCorr = math.atan2(unitXYZNorthCorr.z - unitPosition.p.z, unitXYZNorthCorr.x - unitPosition.p.x)
      local heading = math.atan2(unitPosition.x.z, unitPosition.x.x) + headingNorthCorr
      if heading < 0 then
        heading = heading + 2 * math.pi
      end
      local headingDeg = math.floor(heading / math.pi * 180);

      local velocity = unit:getVelocity()
      local speed = math.sqrt(velocity.x^2 + velocity.z^2)

      msg = msg .. "[";
      msg = msg .. "\"" .. unit:getTypeName() .. "\""
      msg = msg .. "," .. lat
      msg = msg .. "," .. lon
      msg = msg .. "," .. alt
      msg = msg .. "," .. headingDeg
      msg = msg .. "," .. speed
      msg = msg .. ",\"" .. unit:getCallsign() .. "\""
      msg = msg .. "," .. unit:getCoalition()
      msg = msg .. "]";
    end

    local function addGroups(groups)
      local addComma = false
      for groupIndex = 1, #groups do
        local group = groups[groupIndex]
        local units = group:getUnits()
        for unitIndex = 1, #units do
          if Unit.isExist(units[unitIndex]) then
            if addComma then
              msg = msg .. ","
            else
              addComma = true
            end
            addUnit(units[unitIndex])
          end
        end
      end
    end

    msg = msg .. "\"red\":["
    local redGroups = coalition.getGroups(coalition.side.RED)
    addGroups(redGroups)
    msg = msg .. "],\"blue\":["
    local blueGroups = coalition.getGroups(coalition.side.BLUE)
    addGroups(blueGroups)
    msg = msg .. "]}\n"

    return msg
  end

  log("Starting DCS unit data server")

  local tcp = socket.tcp()
  local bound, error = tcp:bind('*', PORT)
  if not bound then
    log("Could not bind: " .. error)
    return
  end
  log("Port " .. PORT .. " bound")

  local serverStarted, error = tcp:listen(1)
  if not serverStarted then
    log("Could not start server: " .. error)
    return
  end
  log("Server started")

  local client
  local function step()

    if not client then
      tcp:settimeout(0.001)
      client = tcp:accept()

      if client then
        tcp:settimeout(0)
        log("Connection established")
      end
    end

    if client then
      local msg = getDataMessage()
      local bytes, status, lastbyte = client:send(msg)
      if not bytes then
        log("Connection lost")
        client = nil
      end
    end
  end

  timer.scheduleFunction(function(arg, time)
    local success, error = pcall(step)
    if not success then
      log("Error: " .. error)
    end
    return timer.getTime() + DATA_TIMEOUT_SEC
  end, nil, timer.getTime() + DATA_TIMEOUT_SEC)

end
