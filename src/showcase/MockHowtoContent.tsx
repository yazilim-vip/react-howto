import { json2CategoryMapper } from '../lib'

const MOCK_DATA = {
    name: 'howto',
    subCategoryList: {
        linux: {
            name: 'linux',
            subCategoryList: {
                oh_my_zsh: {
                    name: 'oh_my_zsh',
                    subCategoryList: {},
                    howtoList: {
                        'oh-my-zsh-installation.howto': {
                            categoryList: ['linux', 'oh_my_zsh'],
                            label: 'oh-my-zsh-installation.howto',
                            filePath: '/home/maemresen/tmp/howto/linux/oh_my_zsh/oh-my-zsh-installation.howto',
                            markdownContent:
                                '# Install oh-my-zsh by following the instructions\n# Link: https://ohmyz.sh/\n$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"\n\n## Install Essaential plugins:\n# zsh-autosuggesstion\n\t#Link: https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh\n\n# zsh-syntax-highlighting\n'
                        }
                    }
                },
                specific_desktop_environment: {
                    name: 'specific_desktop_environment',
                    subCategoryList: {
                        gnome: {
                            name: 'gnome',
                            subCategoryList: {},
                            howtoList: {
                                'gnome_task_switch_isolate_workspace.howto': {
                                    categoryList: ['linux', 'specific_desktop_environment', 'gnome'],
                                    label: 'gnome_task_switch_isolate_workspace.howto',
                                    filePath:
                                        '/home/maemresen/tmp/howto/linux/specific_desktop_environment/gnome/gnome_task_switch_isolate_workspace.howto',
                                    markdownContent:
                                        '# To isolate task switch (with alt tab) for only current workspace \n# Run the following command\n\t$ gsettings set org.gnome.shell.app-switcher current-workspace-only true'
                                }
                            }
                        },
                        kde: {
                            name: 'kde',
                            subCategoryList: {
                                '01_dock_ayarı': {
                                    name: '01_dock_ayarı',
                                    subCategoryList: {
                                        'zz_kde_macos_ayarlanması (deprecated)': {
                                            name: 'zz_kde_macos_ayarlanması (deprecated)',
                                            subCategoryList: {},
                                            howtoList: {
                                                'kde_mac_os_x_ayarları.howto': {
                                                    categoryList: [
                                                        'linux',
                                                        'specific_desktop_environment',
                                                        'kde',
                                                        '01_dock_ayarı',
                                                        'zz_kde_macos_ayarlanması (deprecated)'
                                                    ],
                                                    label: 'kde_mac_os_x_ayarları.howto',
                                                    filePath:
                                                        '/home/maemresen/tmp/howto/linux/specific_desktop_environment/kde/01_dock_ayarı/zz_kde_macos_ayarlanması (deprecated)/kde_mac_os_x_ayarları.howto',
                                                    markdownContent:
                                                        '# KDE MacOs Teması Kurulum Adımları\n\n\t# Dock\'un ayarlanması\n\n\t\t# ilk olarak dock üzerinde kullanılan widgetlar\'ın kurulması gerekmektedir.\n\t\t# kurulması gereken widgetler :\n\t\t\t1-) active window control\n\t\t\t2-) application title\n\t\t\t3-) simple datetime\n\n\n\t\t# latte-dock kurulumu\n\t\t\t\n\t\t\t# manjaro için aşağıdaki komut çalıştırılarak kurulum gerçekleştirilir :\n\t\t\t\t$ sudo pacman -S latte-dock\n\n\n\t\t# MacOS Layout\'unun import edilmesi\t\t\t\n\t\n\t\t\t# latte-dock uygulamalar menüsünden başlatılır. \n\t\t\t# açılan Dock\'un üzerinde herhangi bir yere sağa tıklanır ardından "layouts" menüsü altındaki "Configure..." menüsüne tıklanır.\n\t\t\t# açılan sayfada sağ tarafta bulunan "import" butonuna tıklanır ve "layout" dosyası seçilir\n\t\t\t# ardından sağ alt köşede yer alan "apply" butonuna basılır.\n\t\t\t# import edilen layout ismi üzerine bir kere tıklanır ve sağ tarafta bulunan switch butonuna basılır  \n\n\n\t# İkon kurulumu\n\n\t\t# System Ayarlarına girilier. \n\t\t# Appereance bölümü altında Icons Theme kısmına gidilir.\n\t\t# Sağ Alt kısımdan "Get New Themes..." butonuna tıklanır ve "La Capitaine" isimli icon indirilir\n\t\t# "Get New Themes..." ekranı kapatılır. \n\t\t# "La Capitaine" isimli tema görülecektir. Üzerine tıklanır ve sağ alttan "Apply" butonuna basılır.\n\n\n\t# Tema kurulumu\n\n\t\t# System Ayarlarına girilier. \n\t\t# Appereance bölümü altında Workspace Theme > Desktop Theme kısmına gidilir.\n\t\t# Sağ Alt kısımdan "Get New Themes..." butonuna tıklanır\n\t\t# "La Capitaine" isimli icon indirilir\n\t\t# "Get New Themes..." ekranı kapatılır. \n\t\t# "La Capitaine" isimli tema görülecektir. Üzerine tıklanır ve sağ alttan "Apply" butonuna basılır.\n\n\t\t \n\t\t \n'
                                                }
                                            }
                                        }
                                    },
                                    howtoList: {}
                                }
                            },
                            howtoList: {
                                'kde-Opera-Force_Border.howto': {
                                    categoryList: ['linux', 'specific_desktop_environment', 'kde'],
                                    label: 'kde-Opera-Force_Border.howto',
                                    filePath:
                                        '/home/maemresen/tmp/howto/linux/specific_desktop_environment/kde/kde-Opera-Force_Border.howto',
                                    markdownContent:
                                        '# Fix Opera No Title or Border problem in KDE\n# Problem : In default Opera has no border in KDE Desktop Environment\n# Solution : Set a window rule for Opera to force Borders. \n\n######################################\n#### IMPORTANT : NOT WORKING WELL ####\n######################################\n\n#1) Open Opera and press Alt+F3\n\n#2) Select More Actions > Special Windows Settings\n\n#3) Select Apperance & Fixes tab which is at rightmost.\n\n#4) Select checkbox with title : No titlebar and frame and Force and Select No\n\n#5) Click OK and close the window.\n\n#6) Restart Opera and you are done.'
                                }
                            }
                        }
                    },
                    howtoList: {}
                },
                specific_distro: {
                    name: 'specific_distro',
                    subCategoryList: {
                        manjaro: {
                            name: 'manjaro',
                            subCategoryList: {
                                'Kernel_Panic-Cannot_Mount_RootFS': {
                                    name: 'Kernel_Panic-Cannot_Mount_RootFS',
                                    subCategoryList: {},
                                    howtoList: {
                                        'Fix_Error.howto': {
                                            categoryList: [
                                                'linux',
                                                'specific_distro',
                                                'manjaro',
                                                'Kernel_Panic-Cannot_Mount_RootFS'
                                            ],
                                            label: 'Fix_Error.howto',
                                            filePath:
                                                '/home/maemresen/tmp/howto/linux/specific_distro/manjaro/Kernel_Panic-Cannot_Mount_RootFS/Fix_Error.howto',
                                            markdownContent:
                                                '#\n# Problem: "Kernel Panic. Root FS Cannot Mounted" while booting Manjaro\n# Solution: Fixing EFI of Manjaro\n\n\n#1) Delete old Manjaro EFI files \n\t#1.1) Open another Linux Based operationg system and switch to root user with\n\t\t$ sudo su\n\n\t#1.3) Go to the directory that EFI of operating systems installed on your pc with.\t\n\t\t$ cd /boot/efi/EFI/\n\t\n\t#1.3) List EFI files with to get Manjaro EFI files\n\t\t[/boot/efi/EFI/]$ ls -la\n\n\t#1.4) Delete manjaro EFI partition with\n\t\t[/boot/efi/EFI/]$ rm -rf manjaro_efi_folder_name\n\n#2) Chroot into your Manjaro\n\t# To see more open website under following directory\n\tUseful_Resources/01-Repairing_with_chroot_when_Manjaro_just_wont_boot\n\n\t#2.1) Make temporary directory under mnt directory. \n\t#\t  Your Manjaro will be mounted that directory\n\t\t$ mkdir /mnt/Manjaro\n\n\t#2.2) Move to that directory\n\t\t$ cd /mnt/Manjaro\n\n\t#2.3) List which operating system installed on your partitions\n\t\t[/mnt/Manjaro]$ os-prober\n\n\t\t#e.g Output\n\t\t# /dev/nvme0n1p2@/EFI/Microsoft/Boot/bootmgfw.efi:Windows Boot Manager:Windows:efi\n\t\t# /dev/nvme0n1p5:Manjaro Linux (18.0.3):ManjaroLinux:linux\n\n\t#2.4) Mount partition to /mnt/Manjaro\n\t\t[/mnt/Manjaro]$ mount /dev/xxxxx /mnt/Manjaro\n\n\t#2.5) Mount partition to /mnt/Manjaro with running following commands one by one\n\t\t\t# To mount process\n\t\t\t\t[/mnt/Manjaro]$ mount -t proc proc proc/\n\n\t\t\t# To mount filesystem\n\t\t\t\t[/mnt/Manjaro]$ mount --rbind /sys sys/\n\t\t\t\n\t\t\t# To mount partitions\n\t\t\t\t[/mnt/Manjaro]$ mount --rbind /dev dev/ \t\n\n\t\t\t# To provide internet to chrooted manjaro\n\t\t\t\t[/mnt/Manjaro]$ cp /etc/resolv.conf /mnt/Manjaro/etc/resolv.conf\n\t\n\t#2.6) Start Manjaro with following command\n\t\t[/mnt/Manjaro]$ chroot .\n\n#3) Restore GRUB\n\t# To see more open website under following directory\n\tUseful_Resources/02-Restore_Grub\n\n\t# 3.1) Install dependencies\n\t\t$ sudo pacman -S mtools os-prober\n\n\t# For UEFI Systems (choose that if you use it)\n\t\t#3.1.1) Create EFI directory if not exists\n\t\t\t$ sudo mkdir /boot/efi\n\n\t\t#3.1.2) Mount your EFI partition on your disk\n\t\t\t$ sudo mount /dev/xxxxx /boot/efi\n\n\t\t#3.1.3) Re-install GRUB\n\t\t\t$ sudo grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=manjaro --recheck\n\n\t\t#3.1.4) Update Grub configuration file. \n\t\t\t$ sudo update-grub\n\n\n\n\n\n\n\n\n\n\t\n'
                                        }
                                    }
                                }
                            },
                            howtoList: {
                                'manjaro-failed-to-retreive-from-repository.howto': {
                                    categoryList: ['linux', 'specific_distro', 'manjaro'],
                                    label: 'manjaro-failed-to-retreive-from-repository.howto',
                                    filePath:
                                        '/home/maemresen/tmp/howto/linux/specific_distro/manjaro/manjaro-failed-to-retreive-from-repository.howto',
                                    markdownContent:
                                        '# Update fasted repository with following command:\n\t$ sudo pacman-mirrors --fasttrack && sudo pacman -Syyu\n'
                                },
                                'manjaro-virtualbox-vboxdrv_problem_fix.howto': {
                                    categoryList: ['linux', 'specific_distro', 'manjaro'],
                                    label: 'manjaro-virtualbox-vboxdrv_problem_fix.howto',
                                    filePath:
                                        '/home/maemresen/tmp/howto/linux/specific_distro/manjaro/manjaro-virtualbox-vboxdrv_problem_fix.howto',
                                    markdownContent:
                                        "# Bug:\n# \n# Failed to open a session for the virtual machine InfSec_KaliLinux.\n# \n# The virtual machine 'InfSec_KaliLinux' has terminated unexpectedly during startup with exit code 1 (0x1).\n# \n# Result Code: NS_ERROR_FAILURE (0x80004005)\n# Component: MachineWrap\n# Interface: IMachine {5047460a-265d-4538-b23e-ddba5fb84976}\n# \n# \n# Kernel driver not installed (rc=1908)\n# The VirtualBox Linux kernel driver (vboxdrv) is either not loaded or there is a permission problem wiht /dev/vboxdrv.\n# please reinstall the kernel modules by executing\n# '/sbin/vboxconfig'\n# as root.\n# \n# Solution\n\n\n\n\n"
                                },
                                'manjaro-spotify-key_error-fix.howto': {
                                    categoryList: ['linux', 'specific_distro', 'manjaro'],
                                    label: 'manjaro-spotify-key_error-fix.howto',
                                    filePath:
                                        '/home/maemresen/tmp/howto/linux/specific_distro/manjaro/manjaro-spotify-key_error-fix.howto',
                                    markdownContent:
                                        "\n# Problem : While installing Spotify from AUR packages it gives an error message as follows\n#     curl-7.54.0.tar.gz ... Passed\n#     curl-7.54.0.tar.gz.asc ... Skipped\n# ==> Verifying source file signatures with gpg...\n#     curl-7.54.0.tar.gz ... FAILED (unknown public key 5CC908FDB71E12C2)\n# ==> ERROR: One or more PGP signatures could not be verified!\n# Solution : The problem is that key required to install package is not installed. To fix that problem \n\n#1) Install the key from a repostiry. Let's say the required key is: <KEY>\n\t$ gpg --keyserver hkp://keyserver.ubuntu.com:80 --receive-keys <KEY>\n\t\n"
                                }
                            }
                        }
                    },
                    howtoList: {}
                },
                nvidia: {
                    name: 'nvidia',
                    subCategoryList: {
                        cuda: {
                            name: 'cuda',
                            subCategoryList: {},
                            howtoList: {
                                'Ubuntu1804_How_to_Install_Cuda.howto': {
                                    categoryList: ['linux', 'nvidia', 'cuda'],
                                    label: 'Ubuntu1804_How_to_Install_Cuda.howto',
                                    filePath:
                                        '/home/maemresen/tmp/howto/linux/nvidia/cuda/Ubuntu1804_How_to_Install_Cuda.howto',
                                    markdownContent:
                                        '# Installing Cuda 9.1 on Ubuntu 18.04\n# Reference: https://askubuntu.com/questions/1028830/how-do-i-install-cuda-on-ubuntu-18-04\n\n# Install GCC6 follow instructions felow\n\t# Reference: https://forum.libreelec.tv/thread/12368-fixed-compilation-under-ubuntu-18-04-lts/\n\n\t# update system\n\t\t$ sudo apt update\n\n\t# install gcc and g++ 6\n\t\t$ sudo apt install gcc-6 g++-6\n\n\t# update alternatives\n\t\t$ sudo update-alternatives --install "/usr/bin/gcc" "gcc" "/usr/bin/gcc-6" 60 --slave "/usr/bin/g++" "g++" "/usr/bin/g++-6"\n\t\t$ sudo update-alternatives --config gcc\n\n\t# check versions to verify\n\t\t$ gcc --version\n\t\t$ g++ --version\n'
                                }
                            }
                        }
                    },
                    howtoList: {}
                }
            },
            howtoList: {
                'linux-make_bootable_usb.howto': {
                    categoryList: ['linux'],
                    label: 'linux-make_bootable_usb.howto',
                    filePath: '/home/maemresen/tmp/howto/linux/linux-make_bootable_usb.howto',
                    markdownContent:
                        '# make bootable usb\n\tdd if=/path/to/image.iso of=/dev/sdX bs=8M status=progress oflag=direct\n'
                },
                'linux-open_ssl-encryption_decryption.howto': {
                    categoryList: ['linux'],
                    label: 'linux-open_ssl-encryption_decryption.howto',
                    filePath: '/home/maemresen/tmp/howto/linux/linux-open_ssl-encryption_decryption.howto',
                    markdownContent:
                        '# Reference: https://askubuntu.com/questions/60712/how-do-i-quickly-encrypt-a-file-with-aes\n\n# To enrypt:\n\t$ openssl aes-256-cbc -in attack-plan.txt -out message.enc\n\n# To decrypt:\n\t$ openssl aes-256-cbc -d -in message.enc -out plain-text.txt\n\n# Gpg:\n\t# To encrypt\n\t\t$ gpg -c wifi.ogdar.secret\n\n\t# To decrypt\n\t\t$ gpg -ad < wifi.ogdar.secret.gpg\n\n# Kill agent to clear:\n\t$ gpgconf --kill gpg-agent'
                },
                'test-burak.howto': {
                    categoryList: ['linux'],
                    label: 'test-burak.howto',
                    filePath: '/home/maemresen/tmp/howto/linux/test-burak.howto',
                    markdownContent:
                        '# TITLE\n\n## burak\n\n## emre\n\n* test 1\n* test 2\n\n## mustafa\n* [google](http://www.google.com.tr)\n'
                },
                'linux-scan_devices_on_network.howto': {
                    categoryList: ['linux'],
                    label: 'linux-scan_devices_on_network.howto',
                    filePath: '/home/maemresen/tmp/howto/linux/linux-scan_devices_on_network.howto',
                    markdownContent:
                        '$ sudo arp-scan --interface=wlp2s0 --localnet\n\n# For some reason the command above is not working\n$ sudo nmap -sP -PI -PT 192.168.1.0/24\n'
                },
                'linux-fstab_ile_auto_mount.howto': {
                    categoryList: ['linux'],
                    label: 'linux-fstab_ile_auto_mount.howto',
                    filePath: '/home/maemresen/tmp/howto/linux/linux-fstab_ile_auto_mount.howto',
                    markdownContent:
                        '#Fstab sabit diskinizdeki bölümleri sisteminize bağlama (mount) işleminin otomatik olarak yapılabilmesi için gerekli bir ayar dosyasıdır. Bu başlık altında fstab dosyanızı nasıl düzenleyeceğinizi öğreneceksiniz\n    Syntax :  [Aygıt] [Bağlama Noktası] [Dosya Sistemi] [Ayarlar] [Dump] [Pass]\n\n#Sisteminize bağlı cihazları UUID\'lerine göre sıralamak için:\n    sudo blkid\n    \n# fstab dosyasını terminalden açın.\n    sudo nano -Bw /etc/fstab\n    \n    (-B fstab dosyasının otomatik backup\'ını almak için kullanılır\n    -w = uzun satırların otomatik olarak kısaltılmasını engelleyecektir.)\n    \n# Bir internal diski mount etmek için blkid komutu ile aldığımız uidi kullanabiliriz. fstab dosyasının altına eklenebilir.\n\n    UUID=5AA63DC8A63DA603 /mnt/datadisk ntfs defaults,noatime 0 0  \n    \n    Ayrıca uid yerine /devdeki yeri ile de mount edilebilir\n    /dev/sda1 /mnt/datadisk ntfs defaults,noatime 0 0\n\n# Ağ üzerinde bir yeri samba ile mount etmek için\n\n    //192.168.1.178/Arge-Yazilim /mnt/samba/arge-yazilim cifs username=XXXX,password=XXXX,iocharset=utf8,nofail,x-systemd.automount,workgroup=WORKGROUP,users,uid=1000,gid=100,rw 0 0\n    \n# Eğer kullanıcı adı ve şifrenizi komuta gömmek istemezseniz\n    //192.168.1.178/arge-yazilim /mnt/samba/arge-yazilim cifs credentials=/home/LINUX_USER_NAME/.smbinfo,iocharset=utf8,nofail,x-systemd.automount,workgroup=WORKGROUP,users,uid=1000,gid=100,rw 0 0\n\n    #Dosya \n    username=burak\n    password=THE_PASSWORD\n\n\n    \n\n[Ayarlar] detaylı anlatım\n\ndefaults = rw, suid, dev, exec, auto, nouser ve async seçeneklerini içerir.\n\nSambayla paylaşılan dosyaları bağlamak için bir kullanıcı adı ve şifre oluşturabilirsiniz, ya da daha iyi bir seçim olarak, tanıtım dosyası (credentials file) oluşturabilirsiniz. Bu dosyaya root kullanıcısı chmod=0400 izinleriyle sahip olmalıdır.\n\nsync/async = Dosya sistemine tüm I/O\'lar eşzamanlı olarak/eşzamanlı olmayarak yapılır.\nauto = Bağlamak istediğiniz sürücü/bölüm açılış sürecinde otomatik olarak bağlanabilir. Bu seçenek zaten "mount -a" komutunun varsayılan davranışı olduğu için ayrıca belirtmek gereksizdir.\nnoauto = Sürücü/bölüm açılış sürecinde otomatik olarak bağlanmaz.\ndev/nodev = Bilgisi olan bir arkadaştan açıklama bekliyorum buraya.\nexec/noexec = İkilik (binary) dosyaların çalışmasına izin ver/verme.\nsuid/nosuid = SUID ve SGID bit kullanımına izin ver/verme.\nro = Yalnızca okunabilir bağlamak için.\nrw = Hem okunabilir hem yazılabilir bağlamak için.\nuser = Herhangi bir kullanıcının bağlama işlemini gerçekleştirebilmesi için gereklidir. Bu seçenek "noexec, nosuid, nodev" seçeneklerini eğer aksi belirtilmemişse kendiliğinden kullanır.\nnosuer = Sadece root yetkisine sahip kullanıcının bağlama işlemi gerçekleştirebilmesini sağlar. Bu seçenek varsayılan seçeneklerden birisidir.\ndefaults = Varsayılan ayarları - rw, suid, dev, exec, auto, nouser, async - kullanır.\n_netdev = Ağdan bağlanan sürücüler için kullanılır. Bu sürücüleri ağa bağlandıktan sonra sisteminize bağlayın. Sadece "ntfs" dosya sistemi için geçerlidir.\n'
                }
            }
        },
        docker: {
            name: 'docker',
            subCategoryList: {},
            howtoList: {
                'docker-Wordpress-Docker_Container.howto': {
                    categoryList: ['docker'],
                    label: 'docker-Wordpress-Docker_Container.howto',
                    filePath: '/home/maemresen/tmp/howto/docker/docker-Wordpress-Docker_Container.howto',
                    markdownContent:
                        '\n# Assume that you have already a MySQL container with name wordpressdb\n# Installing Wordpress Container\n\t$ docker run -e WORDPRESS_DB_PASSWORD=YOUR_SECRET --name your_website_name --link wordpressdb:mysql -p 9000:80 -e WORDPRESS_DB_NAME=yazilimvipdb -v "$(pwd)":/var/www/html -d wordpress\n\t# YOUR_SECRET: Write the password of the database that your Wordpress will be used'
                },
                'docker-MySQL-Docker_Container.howto': {
                    categoryList: ['docker'],
                    label: 'docker-MySQL-Docker_Container.howto',
                    filePath: '/home/maemresen/tmp/howto/docker/docker-MySQL-Docker_Container.howto',
                    markdownContent:
                        '\n# Installing MySQL Container\n\t$ docker run -e MYSQL_ROOT_PASSWORD=YOUR_SECRET -v "/home/yazilimvip/websites/mysql":/var/lib/mysql -d mysql:5.7\n\t# YOUR_SECRET: Write your MySQL Root password here'
                },
                'docker-rstudio-server_docker_container.howto': {
                    categoryList: ['docker'],
                    label: 'docker-rstudio-server_docker_container.howto',
                    filePath: '/home/maemresen/tmp/howto/docker/docker-rstudio-server_docker_container.howto',
                    markdownContent:
                        '# To Run RStudio Server on you pc run the following commang\n\t$ sudo docker run -d -p 8787:8787 -e PASSWORD=secret -v <WORKSPACE_FULL_PATH>:/home/rstudio/works --name rstudio-server rocker/rstudio\n\t# WORKSPACE_FULL_PATH = Path of the directory that will be used by RStudio'
                },
                'docker-gitlab-docker_container.howto': {
                    categoryList: ['docker'],
                    label: 'docker-gitlab-docker_container.howto',
                    filePath: '/home/maemresen/tmp/howto/docker/docker-gitlab-docker_container.howto',
                    markdownContent:
                        "\n# Run the following command\n\t$ sudo docker run --detach --name gitlab --hostname localhost --publish 9000:9000 --publish 40022:22 --env GITLAB_OMNIBUS_CONFIG=\"external_url 'http://localhost:9000'; gitlab_rails['gitlab_shell_ssh_port']=40022;\" gitlab/gitlab-ce:11.8.1-ce.0\n"
                }
            }
        },
        latex: {
            name: 'latex',
            subCategoryList: {
                'sublim-text3-latex_configuration': {
                    name: 'sublim-text3-latex_configuration',
                    subCategoryList: {
                        old: {
                            name: 'old',
                            subCategoryList: {},
                            howtoList: {
                                'SublimeText_LaTex_Kurulum_v1.howto': {
                                    categoryList: ['latex', 'sublim-text3-latex_configuration', 'old'],
                                    label: 'SublimeText_LaTex_Kurulum_v1.howto',
                                    filePath:
                                        '/home/maemresen/tmp/howto/latex/sublim-text3-latex_configuration/old/SublimeText_LaTex_Kurulum_v1.howto',
                                    markdownContent:
                                        '#  Yazar : Mehmet Arif Emre Şen\n#  Tarih : 01/11/2018, 04.17\n# Başlık : Sublime Text 3 - LaTeX Kurulumunun Yapılması\n# Kaynak : https://evgenii.com/blog/creating-pdf-from-latex-in-sublime-text-3\n\n#### Elde edilecek Sonuç\n\n# Sublime Text 3\'e build komutu gönderildiğinde üzerinde çalışılan \n# tex uzantılı dosyanız derlenip PDF formatına dönüştürülücektir.\n\n\n#### Bu işleme başlamadan önce gereklilikler: \n\n# Bir LaTeX derleyicinizin kurulu olması gerekmektedir. \n# Bu örnekteki adımlar Ubuntu Ubuntu 16.04.5 LTS üzerinde uygulanmaktadır.\n\n\n#### Kurulum\n\n#1) Yeni bir Build System oluşturulur.\n\n\t#1) Sublime Text 3 açılır\n\t\n\t#2) Tools > Build System menüsünden New Build System ... seçilir\n\n\t#3) Sublime Text üzerinde yeni bir dosya açılacaktır.\n\n\t#4) Aşağıda yer alan metin açılan dosyaya yapıştırılır.\n\t\n\t\t# Metin Başlangıç\n\t\t\t{\n\t\t\t    "shell": true,\n\t\t\t    "cmd": ["/usr/bin/pdflatex $file && latexmk -c"],\n\t\t\t    "selector": "text.tex.latex"\n\t\t\t}\n\t\t# Metin Bitiş\n\n\t\t# /usr/bin/pdflatex\n\t\t\t# LaTeX metnini PDF\'e dönüştürmek için gerekli compailer. \n\n\t\t# latexmk -c\n\t\t\t# bu komut PDF oluşturulurken derleyici tarafından oluşturulan \n\t\t\t# gereksiz dosyaların temizlenmesini sağlar\n\n\n\t#5) Ardından dosya aşağıdaki isimle kaydedilir.\n\t\t# LaTeX.sublime-build\n\n\n#### Dip Not\n\n#1) Sublime Text 3\'te build işlemi yapmak için öntanımlı kısayol:\n\t# ctrl+b\n\n#2) Oluşturulan build system\'i daha sonra tekrar düzenlemek isterseniz: \n\t# LaTeX.sublime-build isimli dosyayı düzenleyebilirsiniz.\n\t\t# öntanımlı dizin : ~/.config/sublime-text-3/Packages/User'
                                },
                                'SublimeText_LaTex_Kurulum_v2.howto': {
                                    categoryList: ['latex', 'sublim-text3-latex_configuration', 'old'],
                                    label: 'SublimeText_LaTex_Kurulum_v2.howto',
                                    filePath:
                                        '/home/maemresen/tmp/howto/latex/sublim-text3-latex_configuration/old/SublimeText_LaTex_Kurulum_v2.howto',
                                    markdownContent:
                                        '#  Yazar : Mehmet Arif Emre Şen\n#  Tarih : 03/11/2018, 06.01\n# Başlık : Sublime Text 2, 3 - LaTeX Kurulumunun Yapılması\n# Kaynak : https://evgenii.com/blog/creating-pdf-from-latex-in-sublime-text-3\n\n#### Elde edilecek Sonuç\n\n# Sublime Text 2, 3\'e build komutu gönderildiğinde üzerinde çalışılan \n# tex uzantılı dosyanız derlenip PDF formatına dönüştürülücektir.\n\n\n#### Bu işleme başlamadan önce gereklilikler: \n\n# Bir LaTeX derleyicinizin kurulu olması gerekmektedir. \n# Bu örnekteki adımlar Ubuntu Ubuntu 16.04.5 LTS üzerinde ve Manjaro i3(17.1.12) üzerinde denenmiştir.\n\n\n#### Kurulum\n\n#1) Yeni bir Build System oluşturulur.\n\n\t#1) Sublime Text 3 açılır\n\t\n\t#2) Tools > Build System menüsünden New Build System ... seçilir\n\n\t#3) Sublime Text üzerinde yeni bir dosya açılacaktır.\n\n\t#4) Aşağıda yer alan metin açılan dosyaya yapıştırılır.\n\t\n\t\t# Metin Başlangıç\n\t\t\t{\n\t\t\t    "shell": true,\n\t\t\t    "cmd": ["/usr/bin/pdflatex $file && latexmk -c"],\n\t\t\t    "selector": "text.tex.latex"\n\t\t\t}\n\t\t# Metin Bitiş\n\n\t\t# /usr/bin/pdflatex\n\t\t\t# LaTeX metnini PDF\'e dönüştürmek için gerekli compailer. \n\n\t\t# latexmk -c\n\t\t\t# bu komut PDF oluşturulurken derleyici tarafından oluşturulan \n\t\t\t# gereksiz dosyaların temizlenmesini sağlar\n\n\n\t#5) Ardından dosya aşağıdaki isimle kaydedilir.\n\t\t# LaTeX.sublime-build\n\n\n#### Dip Not\n\n#1) Sublime Text 3\'te build işlemi yapmak için öntanımlı kısayol:\n\t# ctrl+b\n\n#2) Oluşturulan build system\'i daha sonra tekrar düzenlemek isterseniz: \n\t# LaTeX.sublime-build isimli dosyayı düzenleyebilirsiniz.\n\t\t# öntanımlı dizin : ~/.config/sublime-text-3/Packages/User\n\n#### Hatalar  \n\n#     Sorun : Sublime Text 2 için yaşanan libpng sorunu \n#  Bulgular : Derleme esnasında "symbol png_set_option version PNG16_0..." benzeri bir hata mesajı çıkması\n#     Sebep : Sorun sublime kendi libpng.16.so.16 versiyonunu barındırmaktadır.\n\n#     Çözüm : Sublime Text ile gelen llibpng.so kütüphanesini işletim sistemindeki kurulu versiyon ile değiştirmek.\n#    Kaynak : https://bbs.archlinux.org/viewtopic.php?pid=1605012#p1605012\n\n\t# Sublime Text2\'nin kurulduğu dizine gidilir.\n\t\t# ör: /opt/sublime-text\n\t\tcd /opt/sublime-text\n\n\t# lib dizininin bir yedeği alınır.\n\t\tsudo cp -R lib lib.bak\n\n\t# lib dizinine gidilir.\n\t\tcd lib\n\n\t# aşağıdaki komut çalıştırılır\n\t\tsudo ln -sf /usr/lib/libpng.so libpng16.so.16.2.0'
                                }
                            }
                        }
                    },
                    howtoList: {
                        '_TODO.howto': {
                            categoryList: ['latex', 'sublim-text3-latex_configuration'],
                            label: '_TODO.howto',
                            filePath: '/home/maemresen/tmp/howto/latex/sublim-text3-latex_configuration/_TODO.howto',
                            markdownContent: 'Update document to show configure it in windows if its possible'
                        },
                        'SublimeText_LaTex_Kurulum_v3.howto': {
                            categoryList: ['latex', 'sublim-text3-latex_configuration'],
                            label: 'SublimeText_LaTex_Kurulum_v3.howto',
                            filePath:
                                '/home/maemresen/tmp/howto/latex/sublim-text3-latex_configuration/SublimeText_LaTex_Kurulum_v3.howto',
                            markdownContent:
                                '#  Yazar : Mehmet Arif Emre Şen\n#  Tarih : 03/11/2018, 06.01\n# Başlık : Sublime Text 2, 3 - LaTeX Kurulumunun Yapılması\n# Kaynak : https://evgenii.com/blog/creating-pdf-from-latex-in-sublime-text-3\n\n#### Elde edilecek Sonuç\n\n# Sublime Text 2, 3\'e build komutu gönderildiğinde üzerinde çalışılan \n# tex uzantılı dosyanız derlenip PDF formatına dönüştürülücektir.\n\n\n#### Bu işleme başlamadan önce gereklilikler: \n\n# Bir LaTeX derleyicinizin kurulu olması gerekmektedir. \n# Bu örnekteki adımlar Ubuntu Ubuntu 16.04.5 LTS üzerinde ve Manjaro i3(17.1.12) üzerinde denenmiştir.\n\n\n#### Kurulum\n\n#1) Yeni bir Build System oluşturulur.\n\n\t#1) Sublime Text 3 açılır\n\t\n\t#2) Tools > Build System menüsünden New Build System ... seçilir\n\n\t#3) Sublime Text üzerinde yeni bir dosya açılacaktır.\n\n\t#4) Aşağıda yer alan metin açılan dosyaya yapıştırılır.\n\t\n\t\t# Metin Başlangıç\n\t\t\t{\n\t\t\t    "shell": true,\n\t\t\t    "cmd": ["/usr/bin/pdflatex $file && latexmk -c"],\n\t\t\t    "selector": "text.tex.latex"\n\t\t\t}\n\t\t# Metin Bitiş\n\n\t\t# /usr/bin/pdflatex\n\t\t\t# LaTeX metnini PDF\'e dönüştürmek için gerekli compailer. \n\n\t\t# latexmk -c\n\t\t\t# bu komut PDF oluşturulurken derleyici tarafından oluşturulan \n\t\t\t# gereksiz dosyaların temizlenmesini sağlar\n\n\n\t#5) Ardından dosya aşağıdaki isimle kaydedilir.\n\t\t# LaTeX.sublime-build\n\n\n#### Dip Not\n\n#1) Sublime Text 3\'te build işlemi yapmak için öntanımlı kısayol:\n\t# ctrl+b\n\n#2) Oluşturulan build system\'i daha sonra tekrar düzenlemek isterseniz: \n\t# LaTeX.sublime-build isimli dosyayı düzenleyebilirsiniz.\n\t\t# öntanımlı dizin : ~/.config/sublime-text-3/Packages/User\n\n#### Hatalar  \n\n#     Sorun : Sublime Text 2 için yaşanan libpng sorunu \n#  Bulgular : Derleme esnasında "symbol png_set_option version PNG16_0..." benzeri bir hata mesajı çıkması\n#     Sebep : Sorun sublime kendi libpng.16.so.16 versiyonunu barındırmaktadır.\n\n#     Çözüm : Sublime Text ile gelen llibpng.so kütüphanesini işletim sistemindeki kurulu versiyon ile değiştirmek.\n#    Kaynak : https://bbs.archlinux.org/viewtopic.php?pid=1605012#p1605012\n\n\t# Sublime Text2\'nin kurulduğu dizine gidilir.\n\t\t# ör: /opt/sublime-text\n\t\t$ cd /opt/sublime-text\n\n\t# lib dizininin bir yedeği alınır.\n\t\t$ sudo cp -R lib lib.bak\n\n\t# lib dizinine gidilir.\n\t\t$ cd lib\n\n\t# aşağıdaki komut çalıştırılır\n\t\t$ sudo ln -sf /usr/lib/libpng.so libpng16.so.16.2.0'
                        },
                        '_CHANGELOG.howto': {
                            categoryList: ['latex', 'sublim-text3-latex_configuration'],
                            label: '_CHANGELOG.howto',
                            filePath:
                                '/home/maemresen/tmp/howto/latex/sublim-text3-latex_configuration/_CHANGELOG.howto',
                            markdownContent:
                                '# v1 \n\t- Sublime Text 3 için kurulum eklendi \n\n# v2 \n\t- Sublime Text 2 için yaşanan libpng sorununun çözümü eklendi.\n\t-- Hata: "symbol png_set_option version PNG16_0..."\n\n# v3\n\t- Syntax hataları giderildi\n\t-- Komutların başına "$" işareti kondu\n\n'
                        }
                    }
                }
            },
            howtoList: {}
        },
        git: {
            name: 'git',
            subCategoryList: {},
            howtoList: {
                'git-store_pass.howto': {
                    categoryList: ['git'],
                    label: 'git-store_pass.howto',
                    filePath: '/home/maemresen/tmp/howto/git/git-store_pass.howto',
                    markdownContent: "git config --global credential.helper 'store'"
                },
                'userful_git_commands.howto': {
                    categoryList: ['git'],
                    label: 'userful_git_commands.howto',
                    filePath: '/home/maemresen/tmp/howto/git/userful_git_commands.howto',
                    markdownContent:
                        "# Git comitlerinin compakt birformatta konsol üzerinde gösterilmesi\n\t$ git log --pretty=oneline\n\n# Gün içerisinde yapılmış tüm commit'leri listelemek\n\t$ git log --pretty=oneline --since=today.00:00am\n\n# Gün içinde saat Sabah 08:30'dan sonra yapılmış commitler'in listelenmesi\n\t$ git log --pretty=oneline --since=today.08:30am\n\n# Displaying Repository Graph on Terminal\n\t$ git log --graph --pretty=oneline --abbrev-commit \n\n\n\n"
                },
                'git_commit_categories.howto': {
                    categoryList: ['git'],
                    label: 'git_commit_categories.howto',
                    filePath: '/home/maemresen/tmp/howto/git/git_commit_categories.howto',
                    markdownContent:
                        "feat: a new feature for the user, not a new feature for a build script\nfix: bug fix for the user, not a fix to a build scripts\nrefactor: refactoring production code\nchore: updating gulp tasks etc.; no production code change\ndocs: changes to documentation\nstyle: formatting, missing semicolons, etc.; no code change\nperf: code improved in terms of processing performance\nvendor: update version for dependencies, packages.\ntest: adding missing tests, refactoring tests; no production code\n\n# Count number of commits with each category:\n$ git log --pretty=oneline --no-merges | cut -d \" \" -f 2 | grep -e 'feat:' -e 'fix:' -e 'refactor:' -e 'chore:' -e 'docs:' -e 'style:' -e 'perf:' -e 'vendor:' -e 'test:' |\\\ncut -d \"(\" -f 1 | cut -d \":\" -f 1 | sort -r | uniq -c | sort -nr -k1\n"
                }
            }
        },
        ai_tools: {
            name: 'ai_tools',
            subCategoryList: {
                Torch: {
                    name: 'Torch',
                    subCategoryList: {},
                    howtoList: {
                        'installation.howto': {
                            categoryList: ['ai_tools', 'Torch'],
                            label: 'installation.howto',
                            filePath: '/home/maemresen/tmp/howto/ai_tools/Torch/installation.howto',
                            markdownContent:
                                ' # SD Project - HowTo - Prepare HowTo to install Torch\n# Ubuntu 18.04.1 Kurulum\n\t- change python-software-properties => software-properties-common\n\t- gcc version 6 yapılacak\n\t\t- Kaynak: https://askubuntu.com/questions/1039856/downgrade-gnu-compilers-ubuntu-18-04/1039919\n\t\n\t# Compile Hataları\n\t\t- "error: more than one operator "==" matches these operands" \n\t\t- Kaynak: https://github.com/torch/cutorch/issues/797\n\n\n# Links Useful\n\n# Install CUDA :\n- https://devtalk.nvidia.com/default/topic/1024915/install-cuda-9-on-ubuntu-16-04-with-the-runfile-and-pre-installed-drivers/\n\n# Gitlab Link:\n- https://gitlab.com/yazilim.vip/aucse/machine-learning/torch-library-sample-projects/snippets/1780049\n\n# Tutorials Link:\n- https://github.com/soumith/cvpr2015/blob/master/Deep%20Learning%20with%20Torch.ipynb\n\n\n\n'
                        }
                    }
                }
            },
            howtoList: {}
        },
        nano: {
            name: 'nano',
            subCategoryList: {},
            howtoList: {
                'nano-syntax_highlighting.howto': {
                    categoryList: ['nano'],
                    label: 'nano-syntax_highlighting.howto',
                    filePath: '/home/maemresen/tmp/howto/nano/nano-syntax_highlighting.howto',
                    markdownContent:
                        '## To enable syntax highlighting in Nano text editor:\n# Refernce: https://askubuntu.com/questions/90013/how-do-i-enable-syntax-highlighting-in-nano\n\n\t# Create a file under your home directory with following command\n\t\t$ nano ~/.nanorc\n\n\t# Add following lines to the file:\n\t\t#BEGIN_LINES\n\t\t\tinclude /usr/share/nano/*\n\t\t#EN_LINES'
                }
            }
        },
        ide: {
            name: 'ide',
            subCategoryList: {
                Eclipse: {
                    name: 'Eclipse',
                    subCategoryList: {},
                    howtoList: {
                        'eclipse-shortcuts_configuration.howto': {
                            categoryList: ['ide', 'Eclipse'],
                            label: 'eclipse-shortcuts_configuration.howto',
                            filePath: '/home/maemresen/tmp/howto/ide/Eclipse/eclipse-shortcuts_configuration.howto',
                            markdownContent: 'Show View (Package Explorer)\nActivate Editor'
                        }
                    }
                }
            },
            howtoList: {}
        }
    },
    howtoList: {
        'index.howto': {
            categoryList: [],
            label: 'index.howto',
            filePath: '/home/maemresen/tmp/howto/index.howto',
            markdownContent: 'Hello file\n'
        }
    }
}

export const MOCK_CATEGORY = json2CategoryMapper(MOCK_DATA)
