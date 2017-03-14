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

    msg = msg .. "\"red\":["
    local redGroups = coalition.getGroups(coalition.side.RED)
    for _, group in pairs(redGroups) do
      local units = group:getUnits()
      for unitIndex = 1, #units do
        if unitIndex > 1 then
          msg = msg .. ","
        end
        addUnit(units[unitIndex])
      end
    end

    msg = msg .. "],\"blue\":["
    local redGroups = coalition.getGroups(coalition.side.BLUE)
    for _, group in pairs(redGroups) do
      local units = group:getUnits()
      for unitIndex = 1, #units do
        if unitIndex > 1 then
          msg = msg .. ","
        end
        addUnit(units[unitIndex])
      end
    end
    msg = msg .. "]"

    msg = msg .. "}\n"
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
