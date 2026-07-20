# VS Code Commands & Shortcuts - Windows

## 1. Git Commands (Terminal/PowerShell)

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

## 2. File & Directory Operations (PowerShell)

| Command | Syntax | Purpose | Example |
|---|---|---|---|
| **Change Directory** | `cd "path\to\folder"` | Navigate to folder | `cd C:\Users\rajra\Documents` |
| **List Files** | `ls` or `Get-ChildItem` | Show folder contents | Lists all files & folders |
| **Create Folder** | `mkdir folder-name` | Create new directory | `mkdir IQ_Notes` |
| **Create File** | `New-Item -Path . -Name "file.js" -ItemType File` | Create new file | `New-Item -Name "test.js"` |
| **View File Content** | `Get-Content filename.js` or `cat filename.js` | Read file contents | Displays file text |
| **Copy File** | `Copy-Item -Path file.js -Destination backup.js` | Duplicate file | Creates copy |
| **Move File** | `Move-Item -Path old.js -Destination new.js` | Move/rename file | Relocates file |
| **Delete File** | `Remove-Item filename.js` | Delete file | Removes file permanently |
| **Delete Folder** | `Remove-Item -Path folder -Recurse` | Delete folder & contents | Removes directory tree |
| **Current Directory** | `pwd` or `Get-Location` | Show current path | Displays active folder |
| **Search Files** | `Get-ChildItem -Filter "*.js"` | Find files by pattern | Lists all .js files |

---

## 3. VS Code Keyboard Shortcuts

### Navigation & Editing

| Action | Shortcut | Description |
|---|---|---|
| **Open Command Palette** | `Ctrl + Shift + P` | Access all VS Code commands |
| **Open File** | `Ctrl + P` | Quick open file search |
| **Open Folder** | `Ctrl + K Ctrl + O` | Open folder in VS Code |
| **New File** | `Ctrl + N` | Create new untitled file |
| **New Folder** | `Ctrl + Shift + N` (in Explorer) | Create new folder |
| **Save File** | `Ctrl + S` | Save current file |
| **Save All** | `Ctrl + Shift + S` | Save all open files |
| **Close File** | `Ctrl + W` | Close current tab |
| **Close All Files** | `Ctrl + K Ctrl + W` | Close all tabs |
| **Undo** | `Ctrl + Z` | Undo last change |
| **Redo** | `Ctrl + Shift + Z` or `Ctrl + Y` | Redo change |
| **Find** | `Ctrl + F` | Open find dialog |
| **Replace** | `Ctrl + H` | Open find & replace |
| **Replace All** | `Ctrl + Alt + Enter` | Replace all occurrences |
| **Go to Line** | `Ctrl + G` | Jump to specific line |
| **Go to Symbol** | `Ctrl + Shift + O` | Jump to function/class |
| **Format Document** | `Shift + Alt + F` | Auto-format code |
| **Comment Line** | `Ctrl + /` | Toggle line comment |
| **Block Comment** | `Shift + Alt + A` | Toggle block comment |
| **Indent Line** | `Tab` | Increase indent |
| **Decrease Indent** | `Shift + Tab` | Decrease indent |
| **Move Line Up** | `Alt + Up` | Move line above |
| **Move Line Down** | `Alt + Down` | Move line below |
| **Duplicate Line** | `Shift + Alt + Down` | Copy line below |
| **Delete Line** | `Ctrl + Shift + K` | Delete entire line |

### Terminal & Debugging

| Action | Shortcut | Description |
|---|---|---|
| **Open Terminal** | `Ctrl + `` (backtick) | Toggle integrated terminal |
| **New Terminal** | `Ctrl + Shift + `` | Create new terminal |
| **Split Terminal** | `Ctrl + Shift + \` | Split terminal horizontally |
| **Toggle Sidebar** | `Ctrl + B` | Show/hide file explorer |
| **Focus Terminal** | `Ctrl + J` | Focus on terminal panel |
| **Start Debugging** | `F5` | Run debugger |
| **Step Over** | `F10` | Step to next line |
| **Step Into** | `F11` | Enter function |
| **Step Out** | `Shift + F11` | Exit current function |
| **Continue** | `F5` | Continue execution |
| **Stop Debugging** | `Shift + F5` | Stop debugger |

### Multi-cursor & Selection

| Action | Shortcut | Description |
|---|---|---|
| **Add Cursor** | `Ctrl + Alt + Up/Down` | Create multiple cursors |
| **Select Line** | `Ctrl + L` | Select entire line |
| **Select Word** | `Ctrl + D` | Select word; repeat for next |
| **Select All** | `Ctrl + A` | Select all text |
| **Expand Selection** | `Shift + Alt + Right` | Expand selection by word |
| **Shrink Selection** | `Shift + Alt + Left` | Shrink selection by word |

---

## 4. Node.js & JavaScript Commands (Terminal)

| Command | Syntax | Purpose | Example |
|---|---|---|---|
| **Run JavaScript** | `node filename.js` | Execute JS file | `node 01_Helloworld.js` |
| **Start REPL** | `node` | Interactive Node environment | Type JS code directly |
| **Exit REPL** | `.exit` or `Ctrl + C` | Leave Node REPL | Closes interactive mode |
| **Install Package** | `npm install package-name` | Add dependency | `npm install express` |
| **Install Local** | `npm install -g package-name` | Install globally | `npm install -g nodemon` |
| **List Packages** | `npm list` | Show installed packages | Displays dependency tree |
| **Update Package** | `npm update package-name` | Update to latest version | `npm update express` |
| **Remove Package** | `npm uninstall package-name` | Delete dependency | `npm uninstall lodash` |

---

## 5. VS Code Settings & Extensions (Command Palette)

| Command | Shortcut | Action |
|---|---|---|
| **Open Settings** | `Ctrl + ,` | View user settings |
| **Open Settings (JSON)** | `Ctrl + Shift + P` → "Preferences: Open Settings (JSON)" | Edit settings.json |
| **Extensions** | `Ctrl + Shift + X` | Open extensions panel |
| **Install Extension** | Search in Extensions panel | Add new extension |
| **Disable Extension** | Right-click in Extensions → Disable | Turn off temporarily |
| **Reload Window** | `Ctrl + Shift + P` → "Developer: Reload Window" | Restart VS Code |

---

## 6. Common Development Workflows

### Git Workflow (Complete Example)

```powershell
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

```powershell
# 1. Create new file
New-Item -Name myScript.js -ItemType File

# 2. Edit in VS Code (open file)
code myScript.js

# 3. Write code
# console.log("Hello World");

# 4. Run
node myScript.js
```

### Project Setup

```powershell
# 1. Create project folder
mkdir my-project
cd my-project

# 2. Initialize git
git init

# 3. Create files
New-Item -Name index.js -ItemType File
New-Item -Name README.md -ItemType File

# 4. Initialize npm (optional)
npm init -y

# 5. Open in VS Code
code .
```

---

## 7. Terminal Tips & Tricks (PowerShell)

| Tip | Syntax | Benefit |
|---|---|---|
| **Clear Screen** | `Clear` or `cls` | Cleans terminal display |
| **History** | `Get-History` | Show past commands |
| **Repeat Last** | `!!` (in bash) or `Up Arrow` | Quick re-run |
| **Pipe Output** | `command1 \| command2` | Chain commands |
| **Redirect to File** | `command > output.txt` | Save output |
| **Append to File** | `command >> output.txt` | Append output |
| **Tab Autocomplete** | `Tab` | Auto-complete file names |

---

## 8. Search & Replace Reference

| Feature | Shortcut | Details |
|---|---|---|
| **Find** | `Ctrl + F` | Search in current file |
| **Replace** | `Ctrl + H` | Find & replace in current file |
| **Find in Files** | `Ctrl + Shift + F` | Search across all files |
| **Replace in Files** | `Ctrl + Shift + H` | Replace across all files |
| **Match Case** | `Alt + C` | Case-sensitive search |
| **Match Whole Word** | `Alt + W` | Whole word only |
| **Use Regex** | `Alt + R` | Regular expression search |

---

## 9. VS Code Explorer & View Management

| Action | Shortcut | Purpose |
|---|---|---|
| **Toggle Explorer** | `Ctrl + B` | Show/hide file tree |
| **Focus Explorer** | `Ctrl + Shift + E` | Select file explorer |
| **Search in Explorer** | `Ctrl + F` (in explorer focused) | Quick file search |
| **Refresh Explorer** | `F5` (in explorer) | Reload file tree |
| **Source Control** | `Ctrl + Shift + G` | Open Git panel |
| **Debug View** | `Ctrl + Shift + D` | Open debugger |
| **Extensions** | `Ctrl + Shift + X` | Open extensions |
| **Problems Panel** | `Ctrl + Shift + M` | Show errors/warnings |
| **Output Panel** | `Ctrl + Shift + U` | Show output logs |

---

## TL;DR — Most Used Windows Commands

### Top Git Commands
```
git status                           # Check changes
git add .                            # Stage all
git commit -m "message"              # Commit
git push -u origin branch-name       # Push
git pull origin branch-name          # Pull
```

### Top Keyboard Shortcuts
- `Ctrl + P` — Quick file open
- `Ctrl + Shift + P` — Command palette
- `Ctrl + F` — Find
- `Ctrl + /` — Comment line
- `Ctrl + `` — Open terminal
- `Ctrl + S` — Save
- `F5` — Debug/Run

### Quick Workflow
```powershell
cd project-folder
node filename.js                 # Run JS file
git status                       # Check changes
git add . && git commit -m "msg" # Commit changes
git push origin master           # Push to GitHub
```
