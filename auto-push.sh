#!/bin/bash

# Exit if any command fails
set -e

echo "🔧 Auto Push Script (GitHub)"

# Ask for remote, branch, and commit message
read -p "Remote (default: origin): " remote
remote=${remote:-origin}

read -p "Branch (default: main): " branch
branch=${branch:-main}

read -p "Commit message: " commit_message

# Get current date and time
datetime=$(date +"%Y-%m-%d %H:%M:%S")

# Add, commit, and push
git add .
git commit -m "${commit_message} ${datetime}"
git push "$remote" "$branch"

echo "✅ Successfully pushed to '$remote/$branch'"
echo "📝 Commit message: ${commit_message} ${datetime}"