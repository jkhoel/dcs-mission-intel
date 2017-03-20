do

  local ADDRESS = '127.0.0.1'
  local PORT = 3001
  local DATA_TIMEOUT_SEC = 5

  package.path = package.path..";.\\LuaSocket\\?.lua"
  package.cpath = package.cpath..";.\\LuaSocket\\?.dll"

  require = mint.require
  local socket = require("socket")
  require = nil

  local tcp = socket.tcp()
  local connected = false

  local function log(msg)
    env.info("MINT: " .. msg)
  end

  local function sendData()
    local msg = "{"

    local function addUnit(unit)
      msg = msg .. "[";
      msg = msg .. "\"" .. unit:getTypeName() .. "\""
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
        if addComma then
          msg = msg .. ","
        end

        local group = groups[groupIndex]
        local units = group:getUnits()
        addComma = false
        for unitIndex = 1, #units do
          if Unit.isExist(units[unitIndex]) then
            if addComma then
              msg = msg .. ","
            end
            addUnit(units[unitIndex])
            addComma = true
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

    return pcall(tcp.send, tcp, msg)
  end

  local function loop()

    if not connected then
      connected = tcp:connect(ADDRESS, PORT)
      if connected then
        log("Connection established")
      end
    end

    if connected then
      connected = sendData()
      if not connected then
        log("Connection lost")
      end
    end

    timer.scheduleFunction(loop, {}, timer.getTime() + DATA_TIMEOUT_SEC)
  end

  loop()

end
