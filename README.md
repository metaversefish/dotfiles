# My ARTIX/ARCH dotfiles

These are my dotfiles. They will be deployed when called by [DLARBS](https://github.com/metaversefish/DLARBS)

## Notes

These files are not updated much from [Luke's build](https://github.com/LukeSmithxyz/voidrice)

## Installation

```
git clone https://github.com/metaversefish/DLARBS.git
cd DLARBS && sudo sh dlarbs.sh
```

## Removing Your default DM/WM

You might need to remove all of your DM/WM first before rebooting

### KDE
```
sudo pacman -Rcns kde-applications plasma sddm
```
### XFCE
```
sudo pacman -Rcns xfce gnome sddm
```
### CINAMON
```
sudo pacman -Rcns cinnamon gnome sddm
```
### MATE
```
sudo pacman -Rcns mate gnome sddm
```
**And so on**

## Known Error

If you can't access st **(Terminal)** using `mod+enter` then you might need to follow these steps :-

+ Restart your system and access as root
+ type `nvim /etc/default/locale`
+ and change **LANG=en_XX** to **LANG=en_US-UTF-8**
+ same as above change it again on `nvim /etc/locale.conf`
+ and `reboot`
