<?php
    include_once '../data.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../../res/css/themes/blur.css">
    <link rel="stylesheet" type="text/css" href="straighten.css">
    <link rel="icon" type="image/png" href="/favicon.png">
    <script type="text/javascript" src="desktop-ui.js"></script>
    <script type="text/php" src="../data.php"></script>
    <title>Eclipse UI</title>
</head>

<body>
    $conn;
    <div class="bootscreen" id="bootscreen">
        <a class="bootscreen-text-default" id="bootscreen-text-default-main"></a>
        <a class="bootscreen-text-h1">project eclipse</a>
        
        <div class="progressbar">
            <div class="progress"></div>
        </div>
    </div>
    <div id="logon-screen" style="display: block;">
        <input class="system-input-text" type="password" placeholder="Password" id="logon-screen-input-text" onkeydown="loginauth()">
        <a class="bootscreen-text-default" id="logon-screen-username">Type pix to unlock.</a>
        <div id="logon-blur"></div>
    </div>
    <div id="owner-user" class="desktop" style="display: none;">
        
        <div id="desktop-taskbar" class="desktop-taskbar">
            
            <button class="desktop-taskbar-button" id="desktop-taskbar-button-menu" onclick="menutrigger()"></button>
            
            <button class="desktop-taskbar-button" id="desktop-taskbar-button-settings" onclick="settingstrigger()"></button>
            
            <a class="desktop-taskbar-text" id="desktop-taskbar-clock"></a>
            
            <div class="desktop-taskbar-minimized-apps" id="desktop-taskbar-minimized-apps">
                <!-- <button class="desktop-taskbar-app-button" id="desktop-taskbar-terminal-app-button" style="display: none;" onclick="minimizeterminalapp()"></button> -->
                <!-- <button class="desktop-taskbar-app-button" id="desktop-taskbar-demo-app-button" style="display: none;" onclick="minimizedemoapp()"></button> -->
            </div>

        </div>
        
        <div id="desktop-menu-main" class="desktop-menu" style="display: none;">
            
            <div id="desktop-menu-categories-essential" class="desktop-menu-categories">
                
                <div class="desktop-menu-category-info">
                    <div class="desktop-menu-category-icon"></div>
                    <a class="desktop-menu-category-text">Essential</a>
                </div>

                <div class="desktop-menu-category-menu">
                    <button class="desktop-menu-button" id="desktop-menu-button-calculator" onclick="opencalculatorapp()">Calculator</button>
                    <button class="desktop-menu-button" id="desktop-menu-button-terminal" onclick="openterminalapp()">Terminal</button>
                    <button class="desktop-menu-button" id="desktop-menu-button-demo-app" onclick="opendemoapp()">UI Demo</button>
                </div>
            
            </div>
        
        </div>

        <div id="desktop-menu-settings" class="desktop-menu" style="display: none;">
            
            <div class="desktop-menu-settings-content">

                <button class="desktop-menu-button-first" onclick="opensettingsapp()">Settings</button>

            </div>

        </div>
        
        <p class="desktop-beta-info" id="desktop-beta-info">Confidential Build. Eclipse Cloud Operating System, Beta 1, Build 15 Compilation: 040220222012</p>

        <div id="settings-window" class="window" style="display: none;" onmousedown="settingsappfocus()"> 

            <div id="settings-window-header" class="window-header">
                
                <button id="settings-window-close-button" class="window-header-close-button" onclick="closesettingsapp()"></button>
                <button id="settings-window-resize-button" class="window-header-resize-button" onclick="resizesettingsapp()"></button>
                <button id="settings-window-minimize-button" class="window-header-minimize-button" onclick="minimizesettingsapp()"></button>
                
                <a class="window-header-title" id="settings-window-header-title">Settings (Beta)</a>
            </div>

            <div class="window-sidebar" id="settings-window-sidebar">
                <input class="system-input-sidebar-transparent-text" type="text" id="settings-window-sidebar-input-search" placeholder="Search on settings">
                <div class="window-sidebar-button-panel">
                    <input class="system-input-sidebar-button" type="button" id="settings-window-sidebar-buttons-customization" value="User Account">
                    <input class="system-input-sidebar-button" type="button" id="settings-window-sidebar-buttons-customization" value="Appearance">
                    <input class="system-input-sidebar-button" type="button" id="settings-window-sidebar-buttons-customization" value="Applications">
                    <input class="system-input-sidebar-button" type="button" id="settings-window-sidebar-buttons-customization" value="Language">
                    <input class="system-input-sidebar-button" type="button" id="settings-window-sidebar-buttons-customization" value="Searching System">
                </div>
            </div>

            <div id="settings-window-content">

                <div id="settings-window-categories-users" style="display: block;">
                    
                    <h1 class="text-header1" id="settings-window-categories-users-header">User Account</h1>
                    
                    <div class="system-input-multibutton">

                        <input class="system-input-multibutton-button-input" checked type="radio" name="settings-window-categories-users-multibutton" id="settings-window-categories-users-multibutton-button1">
                        <button class="system-input-multibutton-button">Users
                            <label for="settings-window-categories-users-multibutton-button1" style="position:absolute; width: 100%; height: 100%; top: 0px; left: 0px;"></label>
                        </button>
                    
                    </div>
                    
                    <input class="system-input-text" type="text" id="settings-window-categories-users-input-uname">

                    <input class="system-input-text" type="password" id="settings-window-categories-users-input-userpw">                    
                    
                    <input class="system-input-button" type="button" id="settings-window-categories-users-input-buttonchguname" value="Change your user data" onclick="changeusersettingsapp()">

                </div>

                <div id="settings-window-categories-appearance" style="display: none;">
                    <h1 class="text-header1" id="settings-window-categories-users-header">Appearance</h1>
                    <div class="system-input-multibutton">
                        <input class="system-input-multibutton-button-input" type="radio" name="settings-window-categories-appearance-multibutton" id="settings-window-categories-appearance-multibutton-button1">
                        <button class="system-input-multibutton-button">Style
                            <label for="settings-window-categories-appearance-multibutton-button1" style="position:absolute; width: 100%; height: 100%; top: 0px; left: 0px;"></label>
                        </button>

                        <input class="system-input-multibutton-button-input" type="radio" name="settings-window-categories-appearance-multibutton" id="settings-window-categories-appearance-multibutton-button2">
                        <button class="system-input-multibutton-button" for="settings-window-categories-appearance-multibutton-button2">Color
                            <label for="settings-window-categories-appearance-multibutton-button2" style="position:absolute; width: 100%; height: 100%; top: 0px; left: 0px;"></label>
                        </button>

                        <input class="system-input-multibutton-button-input" type="radio" name="settings-window-categories-appearance-multibutton" id="settings-window-categories-appearance-multibutton-button3">
                        <button class="system-input-multibutton-button" for="settings-window-categories-appearance-multibutton-button3">Wallpaper
                            <label for="settings-window-categories-appearance-multibutton-button3" style="position:absolute; width: 100%; height: 100%; top: 0px; left: 0px;"></label>
                        </button>

                        <h2 class="text-header2" id="settings-window-categories-appearance-header2"></h2>
                    
                    </div>
                </div>

            </div>

        </div>

        <div id="demo-window" class="window" style="display: none;" onmousedown="demoappfocus()"> 

            <div id="demo-window-header" class="window-header">
                
                <button id="demo-window-close-button" class="window-header-close-button" onclick="closedemoapp()"></button>
                <button id="demo-window-resize-button" class="window-header-resize-button" onclick="resizedemoapp()"></button>
                <button id="demo-window-minimize-button" class="window-header-minimize-button" onclick="minimizedemoapp()"></button>
                
                <a class="window-header-title" id="demo-window-header-title">OS Demo</a>

            </div>

            <div id="demo-window-content" class="window-content">
                <h1 class="text-header1" id="demo-window-content-header1">H1</h1>
                <h2 class="text-header2" id="demo-window-content-header2">H2</h2>
                <a class="text-default" id="demo-window-content-p">Paragraph</a>
                <input class="system-input-text" type="text" id="demo-window-content-input-text1">
                <input class="system-input-button" type="button" id="demo-window-content-input-button1" value="Button">
                <label class="system-input-checkbox" for="demo-window-content-input-checkbox1-input">
                    <input class="system-input-checkbox-input" type="checkbox" name="demo-window-content-input-checkbox1-input" id="demo-window-content-input-checkbox1-input" checked="checked">
                    <div class="system-input-checkbox-box"></div>
                    Checkbox
                </label>
            </div>

        </div>

        <div id="terminal-window" class="window" style="display: none;" onmousedown="terminalappfocus()"> 

            <div id="terminal-window-header" class="window-header">
                
                <button id="terminal-window-close-button" class="window-header-close-button" onclick="closeterminalapp()"></button>
                <button id="terminal-window-resize-button" class="window-header-resize-button" onclick="resizeterminalapp()"></button>
                <button id="terminal-window-minimize-button" class="window-header-minimize-button" onclick="minimizeterminalapp()"></button>
                
                <a class="window-header-title" id="terminal-window-header-title">Terminal (Beta)</a>

            </div>

            <div id="terminal-window-content" class="window-content" onclick="promptfocus()">
                
                <div id="terminal-window-container" onclick="promptfocus()">
                    <div class="terminal-window-content-line">
                        <span class="terminal-window-content-prompt" id="terminal-window-content-prompt" style="color: yellow;">$  </span>
                        <input type="text" class="terminalinput" spellcheck="false" id="terminal-window-terminal" onkeyup="terminal()">
                    </div>
                </div>

            </div>

        </div>

        <div id="calculator-window" class="window" style="display: none;" onmousedown="calculatorappfocus()"> 

            <div id="calculator-window-header" class="window-header">
                
                <button id="calculator-window-close-button" class="window-header-close-button" onclick="closecalculatorapp()"></button>
                <button id="calculator-window-resize-button" class="window-header-resize-button" onclick="resizecalculatorapp()"></button>
                <button id="calculator-window-minimize-button" class="window-header-minimize-button" onclick="minimizecalculatorapp()"></button>
                
                <a class="window-header-title" id="calculator-window-header-title">Calculator</a>

            </div>

            <div id="calculator-window-content" class="window-content">

                <input class="system-input-transparent-text" type="text" id="calculator-window-content-input-text1">
                
                <div id="calculator-window-container">
                    
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button-small" value="%">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button-small" value="CE" onclick="calculatordelete(-2)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button-small" value="C" onclick="calculatorclear()">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button-small" value="Delete" onclick="calculatordelete(-1)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="%" onclick="calculatorinsert('* 0.')">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="()" onclick="calculatorinsertorg()"> 
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="2²" onclick="calculatorinsert('**')">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="/" onclick="calculatorinsert('/')">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="7" onclick="calculatorinsert(7)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="8" onclick="calculatorinsert(8)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="9" onclick="calculatorinsert(9)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="X" onclick="calculatorinsert('*')">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="4" onclick="calculatorinsert(4)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="5" onclick="calculatorinsert(5)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="6" onclick="calculatorinsert(6)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="-" onclick="calculatorinsert('-')">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="1" onclick="calculatorinsert(1)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="2" onclick="calculatorinsert(2)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="3" onclick="calculatorinsert(3)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="+" onclick="calculatorinsert('+')">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button-small" value="+/-" onclick="calculatorinsert('* (-1)'), calculatorequal()">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="0" onclick="calculatorinsert(0)">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="," onclick="calculatorinsert('.')">
                    <input class="system-input-button-transparent" type="button" id="calculator-window-content-input-button" value="=" onclick="calculatorequal()">
                    
                </div>
            </div>

        </div>

        <div id="beta-window" class="window" style="display: none;" onmousedown="betaappfocus()"> 

            <div id="beta-window-header" class="window-header">
                
                <button id="beta-window-close-button" class="window-header-close-button" onclick="closebetaapp()"></button>
                <button id="beta-window-resize-button" class="window-header-resize-button" onclick="resizebetaapp()"></button>
                <button id="beta-window-minimize-button" class="window-header-minimize-button" onclick="minimizebetaapp()"></button>
                
                <a class="window-header-title" id="beta-window-header-title">Welcome, user!</a>

            </div>

            <div id="beta-window-content" class="window-content">
                <a class="text-default" id="beta-window-content-p">Paragraph</a>
                <input class="system-input-button" type="button" id="beta-window-content-input-button1" onclick="closebetaapp()" value="Button">
            </div>

        </div>
        
    </div>
</body>

</html>