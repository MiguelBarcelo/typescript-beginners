# Typescript for Beginners - Starter Lesson

## Convert TS to JS
```Bash
# Manual way
$ tsc index.ts

# Kind of automate way, every change in TS it will be converted on JS
$ tsc index.ts -w 
```

## Automatization
```Bash
# Create a tsconfig.json in the Root
$ tsc --init

# Check: [tsconfig.json most common use parameters]

# Every change in TS it will be converted on JS
$ tsc -w
```

## tsconfig.json most common use parameters
```JSON
{
  "compilerOptions": {
    //...

    /* Language and Environment */
    "target": "es2016",

    //...

    /* Modules */
    "rootDir": "./src",

    //...

    /* JavaScript Support */
    "outDir": "./build/js",

    //...
    /* */
    "noEmitOnError": true,
  },
  "include": [
    "src"
  ]
}
```