#!/bin/bash

# Get current date & time
DATE=$(date "+%Y-%m-%d %H:%M:%S")

# Ask for remote name
read -p "Enter remote name (default: origin): " REMOTE
REMOTE=${REMOTE:-origin}

# Ask for branch name
read -p "Enter branch name (default: main): " BRANCH
BRANCH=${BRANCH:-main}

# Ask for commit message
read -p "Enter commit message: " MESSAGE

# Full commit message with date
FULL_MESSAGE="$MESSAGE | $DATE"

echo "🚀 Pushing to $REMOTE/$BRANCH"
echo "📝 Commit message: $FULL_MESSAGE"

# Git commands
git add .
git commit -m "$FULL_MESSAGE"
git push $REMOTE $BRANCH

echo "✅ Done!"
git remote add origin https://github.com/tochratana/plo.git