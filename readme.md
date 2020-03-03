Http server that responses with random jpeg

# Start server
```
npm run build
npm start
```

# Start server in dev-mode with auto with watch
```
npm run build-dev
```

# Genereate and save some big random jpegs
```
WIDTH=5000; HEIGHT=5000; QUALITY=100; NAME=1; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=5000; HEIGHT=5000; QUALITY=100; NAME=2; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=5000; HEIGHT=5000; QUALITY=100; NAME=3; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=5000; HEIGHT=5000; QUALITY=100; NAME=4; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=5000; HEIGHT=5000; QUALITY=100; NAME=5; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=1000; HEIGHT=1000; QUALITY=100; NAME=6; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=1000; HEIGHT=1000; QUALITY=100; NAME=7; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=1000; HEIGHT=1000; QUALITY=100; NAME=8; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=1000; HEIGHT=1000; QUALITY=100; NAME=9; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=100; HEIGHT=100; QUALITY=100; NAME=10; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=100; HEIGHT=100; QUALITY=100; NAME=11; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=100; HEIGHT=100; QUALITY=100; NAME=12; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=100; HEIGHT=100; QUALITY=100; NAME=13; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=100; HEIGHT=100; QUALITY=100; NAME=14; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=100; HEIGHT=100; QUALITY=100; NAME=15; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=100; HEIGHT=100; QUALITY=100; NAME=16; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=4000; HEIGHT=4000; QUALITY=100; NAME=17; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=3000; HEIGHT=3000; QUALITY=100; NAME=18; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=2000; HEIGHT=2000; QUALITY=100; NAME=19; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
WIDTH=3000; HEIGHT=3000; QUALITY=100; NAME=20; curl "http://localhost:3001?width=$WIDTH&height=$HEIGHT&quality=$QUALITY" -o "$NAME.jpg"
```
