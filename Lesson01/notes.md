#Typscript Lesson 1

##Compiling_Our_Code
```tsc filename.ts```

##The_Watch_Flag
In order to start a continous Server for recompiling the code.
```tsc filename.ts -w```
and if tsconfig.ts is specified then
```tsc -w```

##Configure_Your_Project
```tsc init```
-Put Your .ts files in `src` directory & specify it's path `tsconfig.ts` rootDir: "./src".
-Put compiled and final files in ```build``` directory & specify it's path in tsconfig.ts outDir: "./build/js".

##Specify_only_to_compile_files_from_a_specific_directory_only
Add `"include": ["src"]` inside the tsconfig.ts file.
