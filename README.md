# My ARTIX/ARCH dotfiles

These are my dotfiles. They will be deployed when called by [Dlarbs](https://github.com/metaversefish/DLARBS).
If you need some help you can click on the upperight corner "?" or press `mod+f2` (Mod = Win key) if this doesn't appear please check [IMPORTANT](https://github.com/metaversefish/dotfiles#important)

It should look something like this if everything is done correctly

![image](https://imgur.com/X1dRe83.png)

## Notes

These files are not updated much from [Luke's build](https://github.com/LukeSmithxyz/voidrice)

Capslock is changed to Control

- What does this offer? :-
	- zsh (shell)
	- nvim/vim (text editor)
	- [ani-cli](https://github.com/pystardust/ani-cli) (watch anime from cli)
	- [yt-dlp](https://github.com/yt-dlp/yt-dlp) (youtube video downloader)
	- [dwm](https://github.com/metaversefish/dwm) (desktop enviroment)
	- [dwmblocks](https://github.com/metaversefish/dwmblocks) (status bar)
	- [dmenu](https://github.com/metaversefish/dmenu) (application launcher)
	- [st](https://github.com/metaversefish/st) (terminal emulator)
- zsh plugins and vim mode :-
	- zshautosuggestions
	- zshsyntaxhighlighting
	- vi mode (Press Esc)

If `setbg` doesn't load fast you can try alternatives like nitrogen

## Installation

```
git clone https://github.com/metaversefish/DLARBS.git
cd DLARBS && sudo sh dlarbs.sh
```

## Removing Your default DE/WM

You might need to remove all of your DE/WM if you're on artix or any other arch-based distros if not on fresh arch you can just reboot

### KDE
```
sudo pacman -Rcns kde-applications plasma sddm
```
### XFCE
```
sudo pacman -Rcns xfce gnome sddm
```
### CINNAMON
```
sudo pacman -Rcns cinnamon gnome sddm
```
**And so on**

## IMPORTANT

If you can't access st **(Terminal)** using `mod+enter` then you might need to follow these steps :-

+ Restart your system and access as root
+ type `nvim /etc/default/locale`
+ and change **LANG=en_XX** to **LANG=en_US-UTF-8**
+ same as above change it again on `nvim /etc/locale.conf`
+ and `reboot`
