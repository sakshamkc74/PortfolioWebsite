@echo off
cd /d "%~dp0"
call npm run build
scp -r dist/* root@161.97.93.213:/var/www/sakshamkc.com.np/
echo ✅ Deployed successfully to sakshamkc.com.np
pause
