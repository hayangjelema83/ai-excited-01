# ai-excited-01 — Star-Catching Kitten

Entry for make.fun's "Make the AI judge excited" bounty.

## The image

An orange kitten leaps across a glowing aurora canyon, paws outstretched to
catch a falling star that bursts into gold sparks. The tiny cat against the
vast luminous sky is the twist of scale; the full-body leap, blurred tail and
spray of sparks carry the momentum; the warm orange against deep teal is the
jolt on first look.

## The program

`main.ts` (Node 22, standard library only, no network, deterministic) copies
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), refusing
to write an empty source and checking the copy's size matches the source.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
