DIST_REPO_NAME="ThorbenLindhauer/sch86-dist"
SOURCE_REPO_NAME="ThorbenLindhauer/sch86"

OUTPUT_DIR="dist"
DIST_REPO_DIR="sch86-dist"
GIT_FTP_DIR="git-ftp/dist/bin"

SOURCE_COMMIT=`git log --format="%H" -n 1`

echo "Pushing dist folder $OUTPUT_DIR to dist repository $DIST_REPO_NAME"
git config --global user.name "Travis CI"
git config --global user.email "travis@travis-ci.org"

DIST_REPO=https://${GH_TOKEN:-git}@github.com/${DIST_REPO_NAME}.git
mkdir $DIST_REPO_DIR
cd $DIST_REPO_DIR
git init
git pull --depth 1 "$DIST_REPO"
rsync -r --exclude=.git --delete ../$OUTPUT_DIR/ ./

git add -A
git status -s

git commit -m "generate site from ${SOURCE_REPO_NAME}@${SOURCE_COMMIT}"
git push -q "$DIST_REPO" master
../$GIT_FTP_DIR/git-ftp push -n -u $FTP_USER -p $FTP_PASSWORD $FTP_URL

cd -

