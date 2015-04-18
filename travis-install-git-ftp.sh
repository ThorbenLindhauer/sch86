GIT_FTP_VERSION="1.0.2"
git clone https://github.com/git-ftp/git-ftp.git git-ftp
cd git-ftp
git checkout $GIT_FTP_VERSION
make install DESTDIR="./dist"

cd -
