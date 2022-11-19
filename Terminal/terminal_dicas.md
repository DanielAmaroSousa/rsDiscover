//Terminal

//[TAB] completion
para comandos - primeira(s) letras e [TAB]
para argumentos - primeira(s) letras e [TAB] --> vai completar os ficheiros/diretórios

//Atalhos
setinhas (para cima / para baixo)
ctrl + setinhas (pula palavras)
ctrl A (inicio da linha)
ctrl E (final da linha)
ctrl U (limpa a linha)
ctrl K (limpa do cursor ao final da linha)
ctrl L (clear)

//Zsh-Spaceship-Dracula + HyperJS

https://dev.to/vsalbuq/how-to-install-oh-my-zsh-on-windows-10-home-edition-49g2

1.run cmd as administrator

dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

2.Microsoft Store - Debian

https://learn.microsoft.com/pt-pt/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

https://aka.ms/enablevirtualization

verificar em programas e funcionalidade do windows que a virtualização (Virtual Machine) está instalada

3.install zsh, ohmyzsh, spaceship

sudo apt-get update

sudo apt-get upgrade

sudo apt-get install zsh

zsh

sudo apt-get install curl

sudo apt-get install git

git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"

ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
code ~/.zshrc

//add this lines to the end of .zshrc file
Set ZSH_THEME="spaceship"

SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  vi_mode       # Vi-mode indicator
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "

//baixar e instalar a fonte FiraCode https://github.com/tonsky/FiraCode/wiki/Installing#windows

4. Plugins do ZSH

sh -c "$(curl -fsSL https://git.io/zinit-install)"

//~/.zshrc
source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions

5. Setup do terminal no VScode Settings JSON (Ctrl + Shift + p) nota: dsous = <username>
"terminal.integrated.shell.windows": "C:\\Users\\dsous\\AppData\\Local\\Microsoft\\WindowsApps\\debian.exe",

6. Node
sudo apt-get install build-essential
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

//~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install --lts
nvm alias default node
nvm use --lts