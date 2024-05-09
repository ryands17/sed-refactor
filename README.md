# qf-test

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

### Commands to refactor (ripgrep and sed)

```sh
rg -l Iter src | while read file; do sed -i 's/Iter<\(\w\+\)>/AsyncIter<\1>/g' "$file"; done
```

This shows that we can replace a type directly amongst all typescript files inside `src`.

- There's also another way to do this via xargs:

```sh
rg -l Iter src | xargs sed -i 's/Iter<\(\w\+\)>/AsyncIter<\1>/g'
```

- To find patterns spanning across multiple lines, use this to convert the file into a single line:

```sh
fd --type f -e ts --full-path './src' | xargs sed -i -z 's|\n||g'
```
