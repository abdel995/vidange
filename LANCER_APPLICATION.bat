@echo off
title Vidange Auto - Application Mobile
cd /d "%~dp0"
echo ===================================================
echo   Lancement de l'application Vidange Auto...
echo ===================================================
python server.py
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Python n'a pas pu etre execute directement.
    echo Ouverture directe dans votre navigateur...
    start index.html
)
pause
