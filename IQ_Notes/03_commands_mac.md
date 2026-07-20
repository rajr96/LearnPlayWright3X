# VS Code Commands & Shortcuts - macOS

## 1. Git Commands (Terminal/Bash)

| Command | Syntax | Purpose | Output |
|---|---|---|---|
| **Check Status** | `git status` | View modified/untracked files | Shows branch and file status |
| **Stage Files** | `git add .` | Stage all changes | Prepares files for commit |
| **Stage Specific** | `git add filename.js` | Stage one file | Adds single file to staging |
| **View Diff** | `git diff` | Compare changes | Shows added/removed lines |
| **Commit** | `git commit -m "message"` | Create commit with message | Creates commit snapshot |
| **View Log** | `git log` | Show commit history | Lists all commits |
| **Configure Email** | `git config --global user.email "email@example.com"` | Set git user email | Saves email config |
| **Configure Name** | `git config --global user.name "Name"` | Set git user name | Saves username config |
| **Check Remote** | `git remote -v` | View remote repository | Shows fetch/push URLs |
| **Push Branch** | `git push -u origin branch-name` | Push branch to GitHub | Uploads commits to remote |
| **Pull Changes** | `git pull origin branch-name` | Fetch & merge remote branch | Updates local branch |
| **Create Branch** | `git checkout -b new-branch` | Create & switch to new branch | Creates branching point |
| **Switch Branch** | `git checkout branch-name` | Switch to existing branch | Changes working branch |
| **Merge Branch** | `git merge branch-name` | Merge branch into current | Combines branch changes |
| **Delete Branch** | `git branch -d branch-name` | Delete local branch | Removes branch locally |
| **Clone Repo** | `git clone https://github.com/user/repo.git` | Clone remote repository | Downloads entire repo |

---

## 2. File & Directory Operations (Bash/Terminal)

| Command | Syntax | Purpose | Example |
|---|---|---|---|
| **Change Directory** | `cd /path/to/folder` | Navigate to folder | `cd ~/Documents/project` |
| **List Files** | `ls` or `ls -la` | Show folder contents | Lists all files & folders |
| **Long List** | `ls -lh` | Show details with readable sizes | Displays file info |
| **Create Folder** | `mkdir folder-name` | Create new directory | `mkdir IQ_Notes` |
| **Create File** | `touch filename.js` | Create empty file | `touch test.js` |
| **View File Content** | `cat filename.js` | Read file contents | Displays file text |
| **View with Paging** | `less filename.js` | View large files | Page through content |
| **Copy File** | `cp source.js backup.js` | Duplicate file | Creates copy |
| **Copy Folder** | `cp -r folder/ backup-folder/` | Copy directory tree | Recursively copies |
| **Move File** | `mv old.js new.js` | Move/rename file | Relocates file |
| **Move Folder** | `mv old-folder/ new-folder/` | Move directory | Relocates folder |
| **Delete File** | `rm filename.js` | Delete file | Removes file permanently |
| **Delete Folder** | `rm -rf folder-name` | Delete folder & contents | ⚠️ Use carefully! |
| **Current Directory** | `pwd` | Show current path | Displays active folder |
| **Search Files** | `find . -name "*.js"` | Find files by pattern | Lists all .js files |
| **Search Content** | `grep "keyword" filename.js` | Search text in file | Finds matching lines |
| **Tree View** | `tree` or `find . -type d` | Show folder structure | Visual hierarchy |

---

## 3. VS Code Keyboard Shortcuts (macOS)

### Navigation & Editing

| Action | Shortcut | Description |
|---|---|---|
| **Open Command Palette** | `Cmd + Shift + P` | Access all VS Code commands |
| **Open File** | `Cmd + P` | Quick open file search |
| **Open Folder** | `Cmd + K Cmd + O` | Open folder in VS Code |
| **New File** | `Cmd + N` | Create new untitled file |
| **New Folder** | `Cmd + Shift + N` (in Explorer) | Create new folder |
| **Save File** | `Cmd + S` | Save current file |
| **Save All** | `Cmd + Shift + S` | Save all open files |
| **Close File** | `Cmd + W` | Close current tab |
| **Close All Files** | `Cmd + K Cmd + W` | Close all tabs |
| **Undo** | `Cmd + Z` | Undo last change |
| **Redo** | `Cmd + Shift + Z` or `Cmd + Y` | Redo change |
| **Find** | `Cmd + F` | Open find dialog |
| **Replace** | `Cmd + H` | Open find & replace |
| **Replace All** | `Cmd + Option + Enter` | Replace all occurrences |
| **Go to Line** | `Cmd + G` | Jump to specific line |
| **Go to Symbol** | `Cmd + Shift + O` | Jump to function/class |
| **Format Document** | `Shift + Option + F` | Auto-format code |
| **Comment Line** | `Cmd + /` | Toggle line comment |
| **Block Comment** | `Shift + Option + A` | Toggle block comment |
| **Indent Line** | `Tab` | Increase indent |
| **Decrease Indent** | `Shift + Tab` | Decrease indent |
| **Move Line Up** | `Option + Up` | Move line above |
| **Move Line Down** | `Option + Down` | Move line below |
| **Duplicate Line** | `Shift + Option + Down` | Copy line below |
| **Delete Line** | `Cmd + Shift + K` | Delete entire line |
| **Select All** | `Cmd + A` | Select all text |

### Terminal & Debugging

| Action | Shortcut | Description |
|---|---|---|
| **Open Terminal** | `Ctrl + `` (backtick) | Toggle integrated terminal |
| **New Terminal** | `Ctrl + Shift + `` | Create new terminal |
| **Toggle Sidebar** | `Cmd + B` | Show/hide file explorer |
| **Focus Terminal** | `Cmd + J` | Focus on terminal panel |
| **Start Debugging** | `F5` | Run debugger |
| **Step Over** | `F10` | Step to next line |
| **Step Into** | `F11` | Enter function |
| **Step Out** | `Shift + F11` | Exit current function |
| **Continue** | `F5` | Continue execution |
| **Stop Debugging** | `Shift + F5` | Stop debugger |

### Multi-cursor & Selection

| Action | Shortcut | Description |
|---|---|---|
| **Add Cursor** | `Option + Cmd + Up/Down` | Create multiple cursors |
| **Select Line** | `Cmd + L` | Select entire line |
| **Select Word** | `Cmd + D` | Select word; repeat for next |
| **Expand Selection** | `Shift + Option + Right` | Expand selection by word |
| **Shrink Selection** | `Shift + Option + Left` | Shrink selection by word |

---

## 4. Node.js & JavaScript Commands (Terminal)

| Command | Syntax | Purpose | Example |
|---|---|---|---|
| **Run JavaScript** | `node filename.js` | Execute JS file | `node 01_Helloworld.js` |
| **Start REPL** | `node` | Interactive Node environment | Type JS code directly |
| **Exit REPL** | `.exit` or `Ctrl + D` | Leave Node REPL | Closes interactive mode |
| **Install Package** | `npm install package-name` | Add dependency | `npm install express` |
| **Install Global** | `npm install -g package-name` | Install globally | `npm install -g nodemon` |
| **List Packages** | `npm list` | Show installed packages | Displays dependency tree |
| **Update Package** | `npm update package-name` | Update to latest version | `npm update express` |
| **Remove Package** | `npm uninstall package-name` | Delete dependency | `npm uninstall lodash` |
| **Run Script** | `npm run script-name` | Run npm script from package.json | `npm run start` |

---

## 5. VS Code Settings & Extensions (Command Palette)

| Command | Shortcut | Action |
|---|---|---|
| **Open Settings** | `Cmd + ,` | View user settings |
| **Open Settings (JSON)** | `Cmd + Shift + P` → "Preferences: Open Settings (JSON)" | Edit settings.json |
| **Extensions** | `Cmd + Shift + X` | Open extensions panel |
| **Install Extension** | Search in Extensions panel | Add new extension |
| **Disable Extension** | Right-click in Extensions → Disable | Turn off temporarily |
| **Reload Window** | `Cmd + Shift + P` → "Developer: Reload Window" | Restart VS Code |

---

## 6. Common Development Workflows

### Git Workflow (Complete Example)

```bash
# 1. Check status
git status

# 2. Make changes (edit files in VS Code)

# 3. Stage changes
git add .

# 4. Commit
git commit -m "Add feature description"

# 5. Push to remote
git push -u origin master
```

### Create & Run JavaScript File

```bash
# 1. Create new file
touch myScript.js

# 2. Edit in VS Code (open file)
code myScript.js

# 3. Write code
# console.log("Hello World");

# 4. Run
node myScript.js
```

### Project Setup

```bash
# 1. Create project folder
mkdir my-project
cd my-project

# 2. Initialize git
git init

# 3. Create files
touch index.js README.md

# 4. Initialize npm (optional)
npm init -y

# 5. Open in VS Code
code .
```

### Navigate & List with Details

```bash
# 1. Go to documents
cd ~/Documents

# 2. See all files with details
ls -lah

# 3. Create new folder
mkdir LearnPlayWright3X
cd LearnPlayWright3X

# 4. See folder structure
tree
```

---

## 7. Terminal Tips & Tricks (Bash)

| Tip | Syntax | Benefit |
|---|---|---|
| **Clear Screen** | `clear` or `Cmd + K` | Cleans terminal display |
| **Command History** | `history` or `Up Arrow` | Show past commands |
| **Repeat Last Command** | `!!` | Quick re-run |
| **Search History** | `Ctrl + R` | Search previous commands |
| **Pipe Output** | `command1 \| command2` | Chain commands |
| **Redirect to File** | `command > output.txt` | Save output |
| **Append to File** | `command >> output.txt` | Append output |
| **Tab Autocomplete** | `Tab` | Auto-complete file names |
| **Home Directory** | `~` | Shortcut to home folder |
| **Parent Directory** | `..` | Go up one level |
| **Current Directory** | `.` | Current folder |
| **Background Process** | `command &` | Run in background |
| **Kill Process** | `Ctrl + C` | Stop running process |

---

## 8. Search & Replace Reference

| Feature | Shortcut | Details |
|---|---|---|
| **Find** | `Cmd + F` | Search in current file |
| **Replace** | `Cmd + H` | Find & replace in current file |
| **Find in Files** | `Cmd + Shift + F` | Search across all files |
| **Replace in Files** | `Cmd + Shift + H` | Replace across all files |
| **Match Case** | `Cmd + Option + C` | Case-sensitive search |
| **Match Whole Word** | `Cmd + Option + W` | Whole word only |
| **Use Regex** | `Cmd + Option + R` | Regular expression search |

---

## 9. VS Code Explorer & View Management

| Action | Shortcut | Purpose |
|---|---|---|
| **Toggle Explorer** | `Cmd + B` | Show/hide file tree |
| **Focus Explorer** | `Cmd + Shift + E` | Select file explorer |
| **Search in Explorer** | `Cmd + F` (in explorer focused) | Quick file search |
| **Source Control** | `Cmd + Shift + G` | Open Git panel |
| **Debug View** | `Cmd + Shift + D` | Open debugger |
| **Extensions** | `Cmd + Shift + X` | Open extensions |
| **Problems Panel** | `Cmd + Shift + M` | Show errors/warnings |
| **Output Panel** | `Cmd + Shift + U` | Show output logs |
| **Zen Mode** | `Cmd + K Z` | Distraction-free coding |
| **Exit Zen Mode** | `Escape Escape` | Exit distraction-free mode |

---

## 10. macOS Specific Shortcuts

| Action | Shortcut | Purpose |
|---|---|---|
| **Spotlight Search** | `Cmd + Space` | Quick launch VS Code |
| **Force Quit** | `Cmd + Option + Escape` | Close unresponsive app |
| **Screenshot** | `Cmd + Shift + 4` | Capture screen region |
| **Screenshot to Clipboard** | `Cmd + Shift + Ctrl + 4` | Copy screenshot |
| **Open Finder** | `Cmd + Space` then type | Quick file navigation |

---

## 11. Useful Command Combinations (Bash)

| Task | Command | Example |
|---|---|---|
| **Find and count files** | `find . -name "*.js" \| wc -l` | Count all .js files |
| **Search in files** | `grep -r "keyword" .` | Find keyword recursively |
| **Create & navigate** | `mkdir folder && cd folder` | Create and enter folder |
| **List recent files** | `ls -lt \| head -10` | Show 10 most recent files |
| **Remove all .tmp files** | `find . -name "*.tmp" -delete` | Clean up temp files |
| **Chain commands** | `cmd1 && cmd2 && cmd3` | Run if each succeeds |
| **Run if fails** | `cmd1 \|\| cmd2` | Run cmd2 if cmd1 fails |

---

## TL;DR — Most Used macOS Commands

### Top Git Commands
```bash
git status                           # Check changes
git add .                            # Stage all
git commit -m "message"              # Commit
git push -u origin branch-name       # Push
git pull origin branch-name          # Pull
```

### Top Keyboard Shortcuts (⌘ = Cmd)
- `⌘ + P` — Quick file open
- `⌘ + Shift + P` — Command palette
- `⌘ + F` — Find
- `⌘ + /` — Comment line
- `Ctrl + `` — Open terminal
- `⌘ + S` — Save
- `F5` — Debug/Run

### Quick Workflow
```bash
cd ~/Documents/project-folder
node filename.js                 # Run JS file
git status                       # Check changes
git add . && git commit -m "msg" # Commit changes
git push origin master           # Push to GitHub
```

### File Navigation (Bash Essentials)
```bash
pwd                              # Current directory
ls -lah                          # List with details
cd ~/folder                      # Go to folder
mkdir new-folder                 # Create folder
touch file.js                    # Create file
rm filename                      # Delete file
rm -rf folder                    # Delete folder (careful!)
find . -name "*.js"              # Search files
cat filename                     # View file content
```

---

## Comparison: Windows vs macOS

| Operation | Windows (PowerShell) | macOS (Bash) |
|---|---|---|
| **List files** | `ls` or `Get-ChildItem` | `ls` or `ls -la` |
| **Change dir** | `cd C:\path` | `cd ~/path` |
| **Create folder** | `mkdir folder` | `mkdir folder` |
| **Create file** | `New-Item -Name file` | `touch file` |
| **Delete file** | `Remove-Item file` | `rm file` |
| **Delete folder** | `Remove-Item -Path folder -Recurse` | `rm -rf folder` |
| **View file** | `Get-Content file` or `cat file` | `cat file` |
| **Search files** | `Get-ChildItem -Filter` | `find . -name` |
| **Search content** | `Select-String "keyword" file` | `grep "keyword" file` |
| **Path separator** | `\` (backslash) | `/` (forward slash) |
| **Home directory** | `$PROFILE` or `~` | `~` |

> **Key Difference:** Windows uses backslash `\` for paths, macOS uses forward slash `/`. Most commands are the same but syntax may differ.
