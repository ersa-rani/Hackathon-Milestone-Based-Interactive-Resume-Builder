{
"builds"; [
    {
      "src": "public/**",
      "use": "@vercel/static"
    }
  ],
  "routes"; [
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    }
  ]
}