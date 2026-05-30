// auth.js — 共用登入/登出/modal 邏輯

function getUser(){ try{return JSON.parse(localStorage.getItem('rp_user'));}catch(e){return null;} }
function saveUser(u){ localStorage.setItem('rp_user',JSON.stringify(u)); }
function clearUser(){ localStorage.removeItem('rp_user'); }

// 貢獻門檻：至少 1 篇評價才能解鎖資源
function hasUnlockedResources(){
  const u=getUser(); if(!u) return false;
  return (u.reviewCount||0)>=1 || (u.role==='alumni') || (u.role==='teacher');
}

/* ── LOGIN ── */
function doLogin(){
  const email=document.getElementById('loginEmail').value.trim();
  const pass=document.getElementById('loginPassword').value;
  if(!email.endsWith('@grad.ntue.edu.tw')){
    showModalError('loginError','請使用國北教大校內信箱（@grad.ntue.edu.tw）');return;
  }
  if(!pass){showModalError('loginError','請輸入密碼');return;}
  const saved=localStorage.getItem('rp_profile_'+email);
  let user;
  if(saved){
    user=JSON.parse(saved);
  } else {
    user={email,name:email.split('@')[0],role:'student',dept:'',grade:'',level:1,points:0,reviewCount:0,savedCount:0};
  }
  saveUser(user);
  document.getElementById('successTitle').textContent='登入成功！';
  document.getElementById('successMsg').textContent='歡迎回來，'+user.name+'！';
  switchModalView('success');
  updateNavUser();
  if(window.onLoginSuccess) window.onLoginSuccess();
}

/* ── REGISTER ── */
function doRegister(){
  const email=document.getElementById('regEmail').value.trim();
  const role=document.getElementById('regRole').value;
  const name=document.getElementById('regName').value.trim()||email.split('@')[0];

  if(!email.endsWith('@grad.ntue.edu.tw')){
    showModalError('regError','請使用國北教大校內信箱（@grad.ntue.edu.tw）');return;
  }
  if(!role){showModalError('regError','請選擇身份');return;}

  const dept=document.getElementById('regDept')?document.getElementById('regDept').value:'';
  const grade=document.getElementById('regGrade')?document.getElementById('regGrade').value:'';

  if((role==='student'||role==='alumni')&&!dept){
    showModalError('regError','請選擇就讀系所');return;
  }

  const user={
    email,name,role,dept,grade,
    level:1,points:0,reviewCount:0,savedCount:0
  };
  localStorage.setItem('rp_profile_'+email, JSON.stringify(user));
  saveUser(user);
  document.getElementById('successTitle').textContent='註冊成功！';
  document.getElementById('successMsg').textContent='歡迎加入，'+name+'！';
  switchModalView('success');
  updateNavUser();
  if(window.onLoginSuccess) window.onLoginSuccess();
}

function showModalError(id, msg){
  let el=document.getElementById(id);
  if(!el) return;
  el.textContent=msg;
  el.style.display='block';
  setTimeout(()=>{el.style.display='none';},4000);
}

// 身份改變時，動態顯示/隱藏系所與級數欄位
function onRoleChange(){
  const role=document.getElementById('regRole').value;
  const needDept=role==='student'||role==='alumni';
  const deptRow=document.getElementById('regDeptRow');
  const gradeRow=document.getElementById('regGradeRow');
  if(deptRow) deptRow.style.display=needDept?'block':'none';
  if(gradeRow) gradeRow.style.display=needDept?'block':'none';
}

/* ── LOGOUT ── */
function doLogout(){
  clearUser();
  updateNavUser();
  if(window.onLogoutSuccess) window.onLogoutSuccess();
}

/* ── MODAL ── */
function openModal(view){
  switchModalView(view||'login');
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
}
function switchModalView(v){
  ['loginView','registerView','successView'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.style.display='none';
  });
  const t=document.getElementById(v+'View');
  if(t) t.style.display='block';
}

/* ── NAV ── */
function updateNavUser(){
  const user=getUser();
  const navRight=document.getElementById('navRight');
  if(!navRight) return;
  if(user){
    const initial=user.name.charAt(0).toUpperCase();
    navRight.innerHTML=`<div class="nav-user">
      <a href="profile.html" class="nav-avatar" title="個人頁面">${initial}</a>
      <a href="profile.html" class="nav-username">${user.name}</a>
      <button class="nav-logout" onclick="doLogout()">登出</button>
    </div>`;
  } else {
    navRight.innerHTML=`<a href="#" class="nav-cta" onclick="openModal('login');return false;">登入</a>`;
  }
}

document.addEventListener('DOMContentLoaded',()=>{ updateNavUser(); });
