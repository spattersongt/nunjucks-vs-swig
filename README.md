# Nunjucks v.s. Swig

## render

```
$ node render.js
```

result

```
nunjucksCompiled
Raw:
> 305.64535464535464
> 304.12887112887114
> 301.2267732267732
> 276.13186813186815
Average (mean) 296.78321678321674

nunjucks
Raw:
> 121.1008991008991
> 117.28771228771228
> 115.46853146853147
> 112.25374625374626
Average (mean) 116.52772227772228

swig
Raw:
> 29.622377622377623
> 30.146853146853147
> 30.164835164835164
> 27.584415584415584
Average (mean) 29.37962037962038

Winner: nunjucksCompiled
Compared with next highest (nunjucks), it's:
60.74% faster
2.55 times as fast
0.41 order(s) of magnitude faster
QUITE A BIT FASTER

Compared with the slowest (swig), it's:
90.1% faster
10.1 times as fast
1 order(s) of magnitude faster
```

## renderString

```
$ node renderString.js
```

result

```
swig
Raw:
 > 3.1372549019607843
 > 3.286770747740345
 > 3.3812341504649197
 > 3.484320557491289
Average (mean) 3.3223950894143344

nunjucks
Raw:
 > 1.004995004995005
 > 1.1998001998001997
 > 1.2237762237762237
 > 1.2717282717282716
Average (mean) 1.175074925074925

Winner: swig
Compared with next highest (nunjucks), it's:
64.63% faster
2.83 times as fast
0.45 order(s) of magnitude faster
QUITE A BIT FASTER
```
