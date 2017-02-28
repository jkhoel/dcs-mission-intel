do

  package.path = package.path..";.\\LuaSocket\\?.lua"
  package.cpath = package.cpath..";.\\LuaSocket\\?.dll"

  local socket = mint.require("socket")
  local client = socket.tcp()

  if client:connect('127.0.0.1', 3001) then

      client:settimeout(1)
      client:send("Hello from DCS!\n")

    end

end
