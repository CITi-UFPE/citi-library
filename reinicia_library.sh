#!/bin/bash

export PATH=$HOME/webapps/discord_library/bin:$PATH

if pgrep -x "server.js" > /dev/null
then
  forever restart library.js
else
  forever start library.js
fi
