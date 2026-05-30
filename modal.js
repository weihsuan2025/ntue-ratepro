// modal.js — 動態注入完整的登入/註冊 Modal HTML
(function(){
  const html=`
<div class="modal-overlay" id="modalOverlay" onclick="if(event.target===this)closeModal()">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">✕</button>

    <!-- LOGIN -->
    <div id="loginView">
      <h2>登入 RatePro</h2><p>使用國北教大校內信登入</p>
      <div id="loginError" style="display:none;color:#E24B4A;font-size:12px;margin-bottom:.5rem;background:#FAECE7;padding:6px 10px;border-radius:6px"></div>
      <div class="form-group"><label>學校信箱</label>
        <input type="email" id="loginEmail" placeholder="帳號@grad.ntue.edu.tw">
        <div class="form-hint">僅接受 @grad.ntue.edu.tw 結尾的信箱</div>
      </div>
      <div class="form-group"><label>密碼</label>
        <input type="password" id="loginPassword" placeholder="輸入密碼"
          onkeydown="if(event.key==='Enter')doLogin()">
      </div>
      <button class="modal-btn" onclick="doLogin()">登入</button>
      <div class="modal-divider">或</div>
      <div class="modal-switch">還沒有帳號？<a onclick="switchModalView('register')">立即註冊</a></div>
    </div>

    <!-- REGISTER -->
    <div id="registerView" style="display:none">
      <h2>註冊帳號</h2><p>加入國北教大課程評價社群</p>
      <div id="regError" style="display:none;color:#E24B4A;font-size:12px;margin-bottom:.5rem;background:#FAECE7;padding:6px 10px;border-radius:6px"></div>
      <div class="form-group"><label>學校信箱 <span style="color:#E24B4A">*</span></label>
        <input type="email" id="regEmail" placeholder="帳號@grad.ntue.edu.tw">
        <div class="form-hint">系統將寄送驗證信到此信箱</div>
      </div>
      <div class="form-group"><label>顯示名稱</label>
        <input type="text" id="regName" placeholder="例如：教育系大三（選填）">
      </div>
      <div class="form-group"><label>身份 <span style="color:#E24B4A">*</span></label>
        <select id="regRole" onchange="onRoleChange()" style="width:100%;border:1px solid #ddd;border-radius:8px;padding:9px 12px;font-size:14px;font-family:inherit;outline:none">
          <option value="">請選擇身份</option>
          <option value="student">在學生</option>
          <option value="alumni">校友</option>
          <option value="teacher">教師</option>
        </select>
      </div>
      <div id="regDeptRow" style="display:none" class="form-group"><label>就讀系所 <span style="color:#E24B4A">*</span></label>
        <select id="regDept" style="width:100%;border:1px solid #ddd;border-radius:8px;padding:9px 12px;font-size:14px;font-family:inherit;outline:none">
          <option value="">請選擇系所</option>
          <option value="edu">教育學系</option>
          <option value="cs">數位科技設計學系</option>
          <option value="lang">語文與創作學系</option>
          <option value="art">藝術與造型設計學系</option>
          <option value="math">數學暨資訊教育學系</option>
          <option value="sci">自然科學教育學系</option>
          <option value="social">社會與區域發展學系</option>
          <option value="pe">體育學系</option>
          <option value="music">音樂學系</option>
        </select>
      </div>
      <div id="regGradeRow" style="display:none" class="form-group"><label>就讀級數</label>
        <select id="regGrade" style="width:100%;border:1px solid #ddd;border-radius:8px;padding:9px 12px;font-size:14px;font-family:inherit;outline:none">
          <option value="">請選擇（選填）</option>
          <option value="1">大一</option><option value="2">大二</option>
          <option value="3">大三</option><option value="4">大四</option>
          <option value="grad1">碩一</option><option value="grad2">碩二</option>
          <option value="phd">博士生</option>
          <option value="alumni_recent">畢業 1-3 年</option>
          <option value="alumni_mid">畢業 4-8 年</option>
          <option value="alumni_senior">畢業 8 年以上</option>
        </select>
      </div>
      <button class="modal-btn" onclick="doRegister()">註冊</button>
      <div class="modal-switch">已有帳號？<a onclick="switchModalView('login')">返回登入</a></div>
    </div>

    <!-- SUCCESS -->
    <div id="successView" style="display:none;text-align:center;padding:1rem 0">
      <div style="width:60px;height:60px;border-radius:50%;background:#E1F5EE;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:26px;color:#1D9E75">✓</div>
      <h2 id="successTitle"></h2>
      <p id="successMsg" style="margin-bottom:1.5rem"></p>
      <button class="modal-btn" onclick="closeModal();if(window.onModalClose)onModalClose()">開始使用</button>
    </div>
  </div>
</div>`;
  document.body.insertAdjacentHTML('afterbegin', html);
})();
