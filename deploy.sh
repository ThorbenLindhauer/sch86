DIST_REPO_NAME="ThorbenLindhauer/sch86-dist"
SOURCE_REPO_NAME="ThorbenLindhauer/sch86"

OUTPUT_DIR="dist"
DIST_REPO_DIR="sch86-dist"
GIT_FTP_DIR="git-ftp/dist"

SOURCE_COMMIT=`git log --format="%H" -n 1`

echo "Pushing dist folder $OUTPUT_DIR to dist repository $DIST_REPO_NAME"
git config --global user.name "github deloy workflow"
git config --global user.email "workflow@example.com"

DIST_REPO=https://x-access-token:${GH_TOKEN:-git}@github.com/${DIST_REPO_NAME}
mkdir $DIST_REPO_DIR
cd $DIST_REPO_DIR
git init
git pull --depth 30 "$DIST_REPO.git"
rsync -r --exclude=.git --delete ../$OUTPUT_DIR/ ./

git add -A
git status -s

git commit -m "generate site from ${SOURCE_REPO_NAME}@${SOURCE_COMMIT}"
git remote add origin "$DIST_REPO"
git push -q origin master
../$GIT_FTP_DIR/git-ftp push -u $FTP_USER -p $FTP_PASSWORD -v $FTP_URL 

cd -

