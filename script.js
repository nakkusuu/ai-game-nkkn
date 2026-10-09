const originalQuestions = [
    // 7 CÂU DỄ
    { diff: 'easy', time: 30, pts: 10, q: "Đơn vị cơ bản nhất dùng để đo lượng thông tin trong máy tính là gì?", options: ["Byte", "Bit", "Kilobyte", "Megabyte"], ans: 1, exp: "Bit là đơn vị nhỏ nhất để biểu diễn và lưu trữ thông tin (chỉ nhận giá trị 0 hoặc 1). 1 Byte = 8 Bit." },
    { diff: 'easy', time: 30, pts: 10, q: "Trong ngôn ngữ lập trình Python, tên biến nào sau đây là hợp lệ?", options: ["1hocsinh", "hoc sinh", "hoc-sinh", "_hocsinh"], ans: 3, exp: "Tên biến trong Python không được bắt đầu bằng chữ số, không chứa khoảng trắng, không chứa ký tự đặc biệt trừ dấu gạch dưới _." },
    { diff: 'easy', time: 30, pts: 10, q: "Kết quả của phép toán 10 // 3 trong Python là bao nhiêu?", options: ["3.3333", "3", "1", "4"], ans: 1, exp: "Toán tử // dùng để chia lấy phần nguyên. 10 chia 3 được 3 dư 1, phần nguyên là 3." },
    { diff: 'easy', time: 30, pts: 10, q: "Trong Internet vạn vật (IoT), các thiết bị thông minh giao tiếp chủ yếu qua đâu?", options: ["Mạng điện thoại cố định", "Mạng Internet", "Sóng radio vô tuyến", "Cáp quang dưới biển"], ans: 1, exp: "Đặc trưng của IoT là các thiết bị trao đổi dữ liệu qua mạng Internet." },
    { diff: 'easy', time: 30, pts: 10, q: "Lệnh nào sau đây dùng để kiểm tra kiểu dữ liệu của biến trong Python?", options: ["type()", "check()", "kind()", "datatype()"], ans: 0, exp: "Hàm type() được tích hợp sẵn để trả về kiểu dữ liệu (vd: type(5) trả về int)." },
    { diff: 'easy', time: 30, pts: 10, q: "Hành vi nào vi phạm Luật Sở hữu trí tuệ về phần mềm?", options: ["Mua bản quyền để sử dụng.", "Dùng phần mềm mã nguồn mở đúng phép.", "Chia sẻ key bẻ khóa (crack) lên mạng.", "Xóa phần mềm đã mua."], ans: 2, exp: "Bẻ khóa (crack) và phát tán là xâm phạm trực tiếp đến quyền tác giả." },
    { diff: 'easy', time: 30, pts: 10, q: "Lệnh print('Hello', 'World', sep='-') in ra chuỗi nào?", options: ["Hello World", "HelloWorld", "Hello-World", "'Hello'-'World'"], ans: 2, exp: "Tham số sep='-' quy định các giá trị cách nhau bởi dấu gạch ngang." },
    
    // 6 CÂU TRUNG BÌNH
    { diff: 'medium', time: 35, pts: 20, q: "Lệnh list(range(1, 6, 2)) tạo ra list nào?", options: ["[1, 2, 3, 4, 5]", "[1, 3, 5]", "[1, 3, 5, 7]", "[2, 4, 6]"], ans: 1, exp: "Bắt đầu từ 1, kết thúc trước 6, bước nhảy 2. Kết quả: 1, 3, 5." },
    { diff: 'medium', time: 35, pts: 20, q: "Giá trị của biểu thức logic: not (5 > 3) or (4 == 4) là gì?", options: ["True", "False", "None", "Lỗi cú pháp"], ans: 0, exp: "not(True) là False. (4==4) là True. False or True => True." },
    { diff: 'medium', time: 35, pts: 20, q: "Cho s = 'TIN HOC'. Cú pháp s[1:4] trả về kết quả nào?", options: ["'TIN'", "'IN '", "'IN H'", "'IN'"], ans: 1, exp: "Cắt từ vị trí 1 đến 3. s[1]='I', s[2]='N', s[3]=' '. Kết quả 'IN '." },
    { diff: 'medium', time: 35, pts: 20, q: "Kết quả của 10 % 3 + 2 ** 3 trong Python là bao nhiêu?", options: ["9", "11", "7", "24"], ans: 0, exp: "Lũy thừa tính trước: 2**3=8. Chia dư: 10%3=1. 1+8 = 9." },
    { diff: 'medium', time: 35, pts: 20, q: "Phương thức nào thêm phần tử x vào CUỐI danh sách A?", options: ["A.insert(x)", "A.add(x)", "A.push(x)", "A.append(x)"], ans: 3, exp: "append() là phương thức nối phần tử vào đuôi list trong Python." },
    { diff: 'medium', time: 35, pts: 20, q: "Mã độc nào ẩn mình dưới vỏ bọc phần mềm hữu ích để lừa cài đặt?", options: ["Virus", "Worm", "Trojan", "Spyware"], ans: 2, exp: "Trojan giả dạng chương trình hợp pháp để lừa người dùng tự kích hoạt." },

    // 3 CÂU KHÓ
    { diff: 'hard', time: 40, pts: 30, q: "Vòng lặp for i in range(5): nếu i==2 thì continue. s=s+i (s ban đầu 0). s bằng bao nhiêu?", options: ["10", "8", "7", "3"], ans: 1, exp: "Lặp 0,1,3,4 (bỏ qua 2 do continue). 0+1+3+4 = 8." },
    { diff: 'hard', time: 40, pts: 30, q: "a=[1,2,3]; b=a; b[0]=99; print(a[0]) in ra gì?", options: ["1", "99", "2", "Lỗi"], ans: 1, exp: "List là kiểu tham chiếu. a và b trỏ cùng vùng nhớ. Sửa b thì a đổi theo." },
    { diff: 'hard', time: 40, pts: 30, q: "text = 'A-B-C'; result = ''.join(text.split('-')). Kết quả?", options: ["A B C", "A-B-C", "ABC", "['A', 'B', 'C']"], ans: 2, exp: "split('-') tạo list ['A','B','C']. join('') ghép lại thành chuỗi liền nhau 'ABC'." },

    // 4 CÂU SIÊU KHÓ
    { diff: 'super', time: 45, pts: 50, q: "A = [x for x in range(10) if x%2==0]; B = A[::-1]; print(B[1]) là?", options: ["2", "6", "8", "4"], ans: 1, exp: "A=[0,2,4,6,8]. B đảo ngược = [8,6,4,2,0]. B[1] là 6." },
    { diff: 'super', time: 45, pts: 50, q: "s = 'a1b2c3d4'; res = [int(x)*2 for x in s if x.isdigit()]; print(sum(res))?", options: ["10", "24", "20", "Lỗi"], ans: 2, exp: "Lọc ra '1','2','3','4' -> nhân 2 -> res = [2,4,6,8]. sum(res) = 20." },
    { diff: 'super', time: 45, pts: 50, q: "count=0; for i in range(3): for j in range(1,4): if i+j>=4: break; count+=1", options: ["9", "6", "5", "7"], ans: 1, exp: "i=0(j=1,2,3)->tăng 3. i=1(j=1,2)->tăng 2. i=2(j=1)->tăng 1. Tổng count=6." },
    { diff: 'super', time: 45, pts: 50, q: "A = [10, 20, 30, 40, 50]; B = A[-3:-1]; C = B + [A[0]]; print(len(C) + sum(B))", options: ["83", "123", "72", "73"], ans: 3, exp: "B = [30, 40]. C = [30, 40, 10] (len=3). sum(B) = 70. 3 + 70 = 73." }
];

let teams = []; let teamDecks = {}; let activeTeamId = null; let currentQuestion = null;
let globalQuestionNumber = 1; let timer; let timeLeft = 0; let currentEffect = null;

function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function addTeam() {
    const input = document.getElementById('team-name-input');
    const name = input.value.trim();
    if (name === '') return;
    if (teams.length >= 8) return alert("Tối đa 8 đội!");

    teams.push({ id: 'team_' + Date.now(), name: name, members: '', score: 0, lives: 5, streak: 0, lifelines: { fifty: true, time: true, skip: true, ask: true } });
    input.value = ''; renderTeamList();
    document.getElementById('start-btn').disabled = false;
}

function removeTeam(id) {
    teams = teams.filter(t => t.id !== id); renderTeamList();
    if (teams.length === 0) document.getElementById('start-btn').disabled = true;
}

function updateMembers(id, val) { const team = teams.find(t => t.id === id); if(team) team.members = val; }

function renderTeamList() {
    const grid = document.getElementById('team-grid'); grid.innerHTML = '';
    teams.forEach(t => {
        grid.innerHTML += `
            <div class="bg-sky-50 border-2 border-sky-200 rounded-[2rem] p-4 relative">
                <button onclick="removeTeam('${t.id}')" class="absolute top-3 right-3 text-rose-400 hover:text-rose-600 bg-white rounded-full p-1 shadow-sm"><i class="ph-bold ph-x"></i></button>
                <h4 class="font-cute font-black text-sky-800 text-lg mb-2 pl-1">${t.name}</h4>
                <textarea placeholder="Tên thành viên..." oninput="updateMembers('${t.id}', this.value)" class="w-full h-16 bg-white border border-sky-100 rounded-xl p-2 text-xs font-bold text-slate-600 resize-none outline-none focus:border-primary">${t.members}</textarea>
            </div>`;
    });
}

function startGame() {
    let pools = {
        super: shuffleArray(originalQuestions.filter(q => q.diff === 'super')),
        hard: shuffleArray(originalQuestions.filter(q => q.diff === 'hard')),
        medium: shuffleArray(originalQuestions.filter(q => q.diff === 'medium')),
        easy: shuffleArray(originalQuestions.filter(q => q.diff === 'easy'))
    };
    teams.forEach(t => { teamDecks[t.id] = []; });
    let dealIdx = 0;
    ['super', 'hard', 'medium', 'easy'].forEach(diff => {
        pools[diff].forEach(q => { teamDecks[teams[dealIdx % teams.length].id].push(q); dealIdx++; });
    });
    teams.forEach(t => { teamDecks[t.id] = shuffleArray(teamDecks[t.id]); });

    document.getElementById('dashboard').classList.add('view-hidden');
    document.getElementById('quiz-screen').classList.remove('view-hidden');
    document.getElementById('host-panel').classList.remove('view-hidden');
    document.getElementById('header-subtitle').innerText = "Trò chơi đang diễn ra! 🔥";
    
    activeTeamId = teams[0].id; updateTopBar(); loadQuestion();
}

function updateTopBar() {
    const bar = document.getElementById('topbar'); const select = document.getElementById('active-team-select');
    bar.innerHTML = ''; select.innerHTML = '';

    teams.forEach(t => {
        const isDead = t.lives <= 0; const isActive = t.id === activeTeamId && !isDead;
        const hearts = '❤️'.repeat(Math.max(0, t.lives)) + '🤍'.repeat(5 - Math.max(0, t.lives));
        let streakBonus = t.streak >= 10 ? '(+15%)' : t.streak >= 5 ? '(+10%)' : t.streak >= 3 ? '(+5%)' : '';
        
        bar.innerHTML += `
            <div class="team-card min-w-[140px] bg-white border-2 border-slate-200 rounded-[1.5rem] p-4 text-center ${isActive ? 'active-turn' : ''} ${isDead ? 'dead' : ''}" id="card_${t.id}">
                <h4 class="font-cute font-black text-slate-700 text-lg line-clamp-1">${t.name}</h4>
                <div class="text-[10px] tracking-widest my-1">${hearts}</div>
                <h2 class="text-xl font-black text-primary">${Math.floor(t.score)}đ</h2>
                <div class="text-[10px] font-bold text-amber-500 mt-1">🔥 Bá khí: ${t.streak} ${streakBonus}</div>
                <div class="text-[10px] font-bold text-slate-400 mt-1">Còn ${teamDecks[t.id].length} câu</div>
            </div>`;
        
        if (!isDead) select.innerHTML += `<option value="${t.id}" ${isActive ? 'selected' : ''}>${t.name}</option>`;
    });
    updateLifelinesUI();
}

function changeActiveTeam() { activeTeamId = document.getElementById('active-team-select').value; updateTopBar(); }
function getActiveTeam() { return teams.find(t => t.id === activeTeamId); }

function loadQuestion() {
    const team = getActiveTeam();
    const isAllAliveDecksEmpty = teams.filter(t => t.lives > 0).every(t => teamDecks[t.id].length === 0);
    if (isAllAliveDecksEmpty || teams.every(t => t.lives <= 0)) { showRankingScreen(); return; }

    currentQuestion = teamDecks[team.id].pop();
    currentQuestion.shuffledMap = shuffleArray([0, 1, 2, 3]);

    document.getElementById('question-text').innerText = `Lượt ${globalQuestionNumber} - Đội ${team.name}\n\n${currentQuestion.q}`;
    
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`opt-${i}`).parentElement;
        btn.classList.remove('correct', 'wrong', 'hidden-50'); btn.disabled = false;
        document.getElementById(`opt-${i}`).innerText = currentQuestion.options[currentQuestion.shuffledMap[i]];
    }

    const badge = document.getElementById('difficulty-badge');
    const diffNames = { easy: "DỄ", medium: "TRUNG BÌNH", hard: "KHÓ", super: "SIÊU KHÓ" };
    badge.className = `px-3 py-1 rounded-xl font-black text-xs text-white bg-${currentQuestion.diff}`;
    badge.innerText = `${diffNames[currentQuestion.diff]} (${currentQuestion.pts}đ)`;

    currentEffect = null; const effectAlert = document.getElementById('special-effect-alert');
    if (currentQuestion.diff === 'super') {
        const effects = [
            { id: 'lucky', text: "🌟 BÙA MAY MẮN: Đúng nhận thêm 50đ!", class: "bg-amber-100 text-amber-700 border-2 border-amber-300" },
            { id: 'bomb', text: "💣 BOMB MÌN: Sai bị trừ 20đ!", class: "bg-rose-100 text-rose-700 border-2 border-rose-300" },
            { id: 'speed', text: "⚡ TỐC BIẾN: Chỉ có 10 giây trả lời!", class: "bg-indigo-100 text-indigo-700 border-2 border-indigo-300" },
            { id: 'double', text: "💎 X2 NHÂN PHẨM: Trả lời đúng nhân đôi điểm!", class: "bg-sky-100 text-sky-700 border-2 border-sky-300" },
            { id: 'health', text: "💖 BÌNH HỒI MÁU: Trả lời đội được tặng 1 mạng!", class: "bg-emerald-100 text-emerald-700 border-2 border-emerald-300" }
        ];
        const rand = effects[Math.floor(Math.random() * effects.length)];
        currentEffect = rand.id;
        effectAlert.innerText = rand.text;
        effectAlert.className = `w-full mb-4 py-2 px-4 rounded-xl font-bold text-center text-sm shadow-sm animate-bounce ${rand.class}`;
        effectAlert.classList.remove('hidden');
        
        if (currentEffect === 'health') { if(team.lives < 5) team.lives++; updateTopBar(); }
        if (currentEffect === 'speed') currentQuestion.time = 10;
    } else {
        effectAlert.classList.add('hidden');
    }

    globalQuestionNumber++; timeLeft = currentQuestion.time; startTimer(currentQuestion.time);
}

function startTimer(maxTime) {
    clearInterval(timer); const bar = document.getElementById('timer-bar'); const text = document.getElementById('timer-text');
    timer = setInterval(() => {
        timeLeft--; text.innerText = timeLeft; const pct = (timeLeft / maxTime) * 100;
        bar.style.width = pct + '%';
        if(pct > 50) bar.style.backgroundColor = '#34d399';
        else if (pct > 20) bar.style.backgroundColor = '#fbbf24';
        else bar.style.backgroundColor = '#fb7185';
        if (timeLeft <= 0) { clearInterval(timer); handleWrongAnswer(null); }
    }, 1000);
}

function checkAnswer(selectedUIIdx) {
    clearInterval(timer); const team = getActiveTeam();
    for (let i = 0; i < 4; i++) document.getElementById(`opt-${i}`).parentElement.disabled = true;

    const originalSelectedIdx = currentQuestion.shuffledMap[selectedUIIdx];
    const correctUIIdx = currentQuestion.shuffledMap.indexOf(currentQuestion.ans);

    const btnSelected = document.getElementById(`opt-${selectedUIIdx}`).parentElement;
    const btnCorrect = document.getElementById(`opt-${correctUIIdx}`).parentElement;

    if (originalSelectedIdx === currentQuestion.ans) {
        btnSelected.classList.add('correct'); handleCorrectAnswer(team, currentQuestion.pts);
    } else {
        btnSelected.classList.add('wrong'); btnCorrect.classList.add('correct'); handleWrongAnswer(team);
    }
}

function handleCorrectAnswer(team, basePts) {
    team.streak++; let streakBonusPercent = 0;
    if (team.streak >= 10) streakBonusPercent = 0.15; else if (team.streak >= 5) streakBonusPercent = 0.10; else if (team.streak >= 3) streakBonusPercent = 0.05;

    let finalPts = basePts + (basePts * streakBonusPercent);
    let effectStr = "";
    if (currentEffect === 'lucky') { finalPts += 50; effectStr = "(+50đ Lucky) "; }
    if (currentEffect === 'double') { finalPts *= 2; effectStr = "(x2 Điểm) "; }

    team.score += finalPts;
    let message = `+${finalPts}đ ${effectStr}`;
    if(streakBonusPercent > 0) message += ` | Bá khí x${team.streak} (+${streakBonusPercent*100}%)`;
    showExplanation(true, message);
}

function handleWrongAnswer(team) {
    let msg = "Sai rồi! Mất 1 mạng 💔";
    if (team) {
        team.streak = 0; team.lives--;
        if (currentEffect === 'bomb') { team.score = Math.max(0, team.score - 20); msg += " | Dính BOMB: Trừ 20đ"; }
    } else { msg = "Hết giờ! Đội không đưa ra đáp án bị trừ mạng."; }
    showExplanation(false, msg);
}

function showExplanation(isCorrect, scoreMsg) {
    updateTopBar();
    const modal = document.getElementById('explanation-modal');
    document.getElementById('result-icon').innerText = isCorrect ? "🎉" : "💥";
    document.getElementById('result-title').innerText = isCorrect ? "CHÍNH XÁC!" : (timeLeft<=0 ? "HẾT GIỜ!" : "RẤT TIẾC!");
    document.getElementById('result-title').className = `text-3xl font-cute font-black mb-2 ${isCorrect ? 'text-emerald-500' : 'text-rose-500'}`;
    document.getElementById('score-earned').innerText = scoreMsg || "";
    document.getElementById('score-earned').className = `font-bold text-lg mb-4 ${isCorrect ? 'text-amber-500' : 'text-slate-500'}`;
    document.getElementById('explanation-text').innerText = currentQuestion.exp;
    
    document.getElementById('explanation-modal').classList.remove('hidden');
}

function nextQuestion() {
    document.getElementById('explanation-modal').classList.add('hidden');
    let startIdx = teams.findIndex(t => t.id === activeTeamId); let nextIdx = startIdx + 1; let found = false;
    for(let i = 0; i < teams.length; i++) {
        if(nextIdx >= teams.length) nextIdx = 0;
        const t = teams[nextIdx];
        if(t.lives > 0 && teamDecks[t.id].length > 0) { activeTeamId = t.id; found = true; break; }
        nextIdx++;
    }
    if(!found) { showRankingScreen(); return; }
    updateTopBar(); loadQuestion();
}

function updateLifelinesUI() {
    const t = getActiveTeam(); if(!t) return;
    document.getElementById('ll-fifty').disabled = !t.lifelines.fifty;
    document.getElementById('ll-time').disabled = !t.lifelines.time;
    document.getElementById('ll-skip').disabled = !t.lifelines.skip;
    document.getElementById('ll-ask').disabled = !t.lifelines.ask;
}

function useLifeline(type) {
    const team = getActiveTeam(); if (!team.lifelines[type]) return;
    team.lifelines[type] = false; updateLifelinesUI();

    if (type === 'fifty') {
        let hidden = 0;
        for (let i = 0; i < 4; i++) {
            if (currentQuestion.shuffledMap[i] !== currentQuestion.ans && hidden < 2) {
                document.getElementById(`opt-${i}`).parentElement.classList.add('hidden-50'); hidden++;
            }
        }
    } 
    else if (type === 'time') { timeLeft += 15; } 
    else if (type === 'skip') {
        clearInterval(timer); alert("⏩ Kích hoạt BỎ QUA. Câu hỏi bị hủy bỏ (Không tính điểm/mạng)!"); nextQuestion();
    } 
    else if (type === 'ask') { alert("🗣 Hỏi đồng bọn xung quanh trong 15s!"); }
}

function showRankingScreen() {
    document.getElementById('quiz-screen').classList.add('view-hidden');
    document.getElementById('host-panel').classList.add('view-hidden');
    document.getElementById('header-subtitle').innerText = "Trò chơi kết thúc! 🎈";
    document.getElementById('ranking-screen').classList.remove('view-hidden');
    
    const sorted = [...teams].sort((a, b) => b.score - a.score);
    if(sorted[2]) setupPodium(3, sorted[2]); else document.getElementById('podium-3').style.display = 'none';
    if(sorted[1]) setupPodium(2, sorted[1]); else document.getElementById('podium-2').style.display = 'none';
    if(sorted[0]) setupPodium(1, sorted[0]);
    
    if(sorted.length > 3) {
        const ul = document.getElementById('other-ranks-list'); ul.innerHTML = '';
        for(let i=3; i<sorted.length; i++) {
            ul.innerHTML += `<li class="flex justify-between bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm"><b class="text-slate-700">#${i+1} ${sorted[i].name}</b> <span class="font-bold text-primary">${Math.floor(sorted[i].score)}đ</span></li>`;
        }
    } else { document.getElementById('other-ranks').style.display = 'none'; }

    setTimeout(() => document.getElementById('podium-3').classList.add('show-podium'), 1000);
    setTimeout(() => document.getElementById('podium-2').classList.add('show-podium'), 2500);
    setTimeout(() => { document.getElementById('podium-1').classList.add('show-podium'); triggerConfetti(); }, 4500);
    setTimeout(() => document.getElementById('other-ranks').classList.add('show-podium'), 6000);
}

function setupPodium(rank, teamObj) {
    document.getElementById(`name-${rank}`).innerText = teamObj.name;
    document.getElementById(`score-${rank}`).innerText = Math.floor(teamObj.score) + "đ";
}

function triggerConfetti() {
    const end = Date.now() + 3000;
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#F43F5E'];
    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}