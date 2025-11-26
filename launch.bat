@echo off
setlocal enabledelayedexpansion

REM Ensure the working directory is the project root (this script's folder).
cd /d "%~dp0"

echo.
echo [Ottis AI] Lorenz & Son Plumbing local launcher
echo.

REM Install dependencies when node_modules is missing.
if not exist "node_modules" (
    echo [setup] Installing npm packages...
    call npm install
    if errorlevel 1 (
        echo.
        echo [error] npm install failed with exit code !errorlevel!.
        goto :fail
    )
    echo [setup] Dependencies installed.
    echo.
)

echo [launch] Starting Gatsby development server...
echo [launch] Once ready, open http://localhost:8000/ in your browser.
echo.

call npm run develop
if errorlevel 1 (
    echo.
    echo [error] npm run develop exited with code !errorlevel!.
    goto :fail
)

goto :end

:fail
echo.
echo [Ottis AI] Launch script encountered an error.
echo Press any key to close this window.
pause >nul
exit /b 1

:end
echo.
echo [Ottis AI] Gatsby development server has stopped.
echo Press any key to close this window.
pause >nul
exit /b 0


