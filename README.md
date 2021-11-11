# online-level-creator

### An online level creator, generating CSV level files for 2D video games

##### Explanation

The main goal of this project is to create a simple 2D level creator, which will exports level in CSV file.
The level will be "matrix-like" levels, composed of blocs represendet by a value (numeric or non-numeric).

##### Exemple

In this exemple we want to create a level with a hill.

The CSV file created by the online-level-creator should look like this :

```
0,0,0,0,0,0
0,0,1,1,0,0
0,1,1,1,1,0
1,1,1,1,1,0
1,1,1,1,1,1
```
where `0` is the value of an 'air block' (`░░`), and `1` is the value of a 'ground block' (`▓▓`).


The computer should load the level in memory like this :

```
level = [
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 0, 0 ],
  [ 0, 1, 1, 1, 1, 0 ],
  [ 1, 1, 1, 1, 1, 0 ],
  [ 1, 1, 1, 1, 1, 1 ]
]
```

It should display on the screen something like :

```
░░ ░░ ░░ ░░ ░░ ░░
░░ ░░ ▓▓ ▓▓ ░░ ░░
░░ ▓▓ ▓▓ ▓▓ ▓▓ ░░
▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ░░
▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ▓▓
```

---

Work in progress, DM me on Discord ( `&times;#2451` ) if you want to help me.
