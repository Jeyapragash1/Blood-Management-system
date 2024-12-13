#!/bin/bash

# Loop to create 150 commits
for i in {1..15}; do
    echo "Commit number $i - $(date)" >> boost-log.txt  # Append date and commit number
    git add boost-log.txt                              # Stage the file
    git commit -m "Commit $i: jp's committ's"   # Commit with a message
done

# Push all changes to the remote repository
git push origin main
