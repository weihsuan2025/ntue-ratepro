// auth.js — 共用登入/登出邏輯，所有頁面引入

function getUser(){
  try{ return JSON.parse(localStorage.getItem('rp_user')); }catch(e){ return null; }
}
function saveUser(u){ localStorage.setItem('rp_user',JSON.stringify(u)); }
function clearUser(){ localStorage.removeItem('rp_user'); }

// 登入驗證
function doLogin(){
  const email=document.getElementById('loginEmail').value.trim();
  const pass=document.getElementById('loginPassword').value;
  if(!email.endsWith('@grad.ntue.edu.tw')){
    alert('請使用國北教大校內信箱（@grad.ntue.edu.tw）');return;
  }
  if(!pass){alert('請輸入密碼');return;}
  const name=localStorage.getItem('rp_name_'+email)||email.split('@')[0];
  const user={email,name,level:2,points:65,reviewCount:3,savedCount:2};
  saveUser(user);
  document.getElementById('successTitle').textContent='登入成功！';
  document.getElementById('successMsg').textContent='歡迎回來，'+name+'！';
  switchModalView('success');
  updateNavUser();
  if(window.onLoginSuccess) window.onLoginSuccess();
}

// 註冊
function doRegister(){
  const email=document.getElementById('regEmail').value.trim();
  const pass=document.getElementById('regPassword').value;
  const name=document.getElementById('regName').value.trim()||email.split('@')[0];
  if(!email.endsWith('@grad.ntue.edu.tw')){
    alert('請使用國北教大校內信箱（@grad.ntue.edu.tw）');return;
  }
  if(pass.length<8){alert('密碼至少需要 8 個字元');return;}
  localStorage.setItem('rp_name_'+email,name);
  const user={email,name,level:1,points:0,reviewCount:0,savedCount:0};
  saveUser(user);
  document.getElementById('successTitle').textContent='註冊成功！';
  document.getElementById('successMsg').textContent='歡迎加入，'+name+'！';
  switchModalView('success');
  updateNavUser();
  if(window.onLoginSuccess) window.onLoginSuccess();
}

// 登出
function doLogout(){
  clearUser();
  updateNavUser();
  if(window.onLogoutSuccess) window.onLogoutSuccess();
}

// Modal 控制
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
  const target=document.getElementById(v+'View');
  if(target) target.style.display='block';
}

// Nav 更新
function updateNavUser(){
  const user=getUser();
  const navRight=document.getElementById('navRight');
  if(!navRight) return;
  if(user){
    const initial=user.name.charAt(0).toUpperCase();
    navRight.innerHTML=`
      <div class="nav-user">
        <a href="profile.html" class="nav-avatar" title="個人頁面">${initial}</a>
        <a href="profile.html" class="nav-username">${user.name}</a>
        <button class="nav-logout" onclick="doLogout()">登出</button>
      </div>`;
  } else {
    navRight.innerHTML=`<a href="#" class="nav-cta" onclick="openModal('login');return false;">登入</a>`;
  }
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded',()=>{
  updateNavUser();
});
