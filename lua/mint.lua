do

  package.path = package.path..";.\\LuaSocket\\?.lua"
  package.cpath = package.cpath..";.\\LuaSocket\\?.dll"

  require = mint.require
  local socket = require("socket")
  local client = socket.tcp()

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
      msg = msg .. "]";
    end

    local function addGroups(groups)
      local isFirstUnit = true
      for groupIndex = 1, #groups do
        if groupIndex > 1 then
          msg = msg .. ","
        end
        local group = groups[groupIndex]
        local units = group:getUnits()
        for unitIndex = 1, #units do
          if not isFirstUnit then
            msg = msg .. ","
          end
          addUnit(units[unitIndex])
          isFirstUnit = false
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
    client:send(msg)
  end

  local function loop()
    if not client then
      return
    end

    timer.scheduleFunction(loop, {}, timer.getTime() + 5)
    sendData()
  end

  if client:connect('127.0.0.1', 3001) then
    loop()
  end

  require = nil

end
