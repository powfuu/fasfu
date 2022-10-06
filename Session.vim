let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Desktop/dev/webapps/fasfu
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +458 src/routes/carro/carroComponents.js
badd +965 src/routes/inicio/inicioComponents.js
badd +5 src/routes/inicio/inicio.jsx
argglobal
%argdel
edit src/routes/inicio/inicio.jsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 70 + 106) / 213)
exe 'vert 2resize ' . ((&columns * 70 + 106) / 213)
exe 'vert 3resize ' . ((&columns * 71 + 106) / 213)
argglobal
balt src/routes/inicio/inicioComponents.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 275 - ((29 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 275
normal! 039|
wincmd w
argglobal
if bufexists(fnamemodify("src/routes/inicio/inicioComponents.js", ":p")) | buffer src/routes/inicio/inicioComponents.js | else | edit src/routes/inicio/inicioComponents.js | endif
if &buftype ==# 'terminal'
  silent file src/routes/inicio/inicioComponents.js
endif
balt src/routes/inicio/inicio.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 965 - ((48 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 965
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("src/routes/carro/carroComponents.js", ":p")) | buffer src/routes/carro/carroComponents.js | else | edit src/routes/carro/carroComponents.js | endif
if &buftype ==# 'terminal'
  silent file src/routes/carro/carroComponents.js
endif
balt src/routes/inicio/inicioComponents.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 458 - ((47 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 458
normal! 05|
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 70 + 106) / 213)
exe 'vert 2resize ' . ((&columns * 70 + 106) / 213)
exe 'vert 3resize ' . ((&columns * 71 + 106) / 213)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
