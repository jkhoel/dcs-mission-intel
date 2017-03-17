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
      local pos = unit:getPosition().p
      local lat, lon, alt = coord.LOtoLL(pos)
      msg = msg .. "," .. lat
      msg = msg .. "," .. lon
      msg = msg .. "," .. alt
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

    timer.scheduleFunction(loop, {}, timer.getTime() + 2)	-- Change to 5 instead of 2 before release so that updates are sent every 5sec
    sendData()
  end

  if client:connect('127.0.0.1', 3001) then
    loop()
  end

  require = nil

end
