// Shoe site interactivity
let shoeCart = [];
const shoeCartKey = 'shoeCart';

function loadShoeCart(){
  const s = localStorage.getItem(shoeCartKey);
  shoeCart = s? JSON.parse(s): [];
  updateShoeCartCount();
}
function saveShoeCart(){ localStorage.setItem(shoeCartKey, JSON.stringify(shoeCart)); }
function updateShoeCartCount(){
  const el = document.querySelector('.cart-count');
  if(!el) return;
  const total = shoeCart.reduce((s,i)=>s+i.quantity,0);
  el.textContent = total; el.style.display = total>0? 'flex':'none';
}
function addToShoeCart(name, price){
  const item = shoeCart.find(i=>i.name===name);
  if(item) item.quantity++;
  else shoeCart.push({name,price,quantity:1});
  saveShoeCart(); updateShoeCartCount(); showNotification(`${name} added to cart`);
}
function showNotification(text){
  const n = document.createElement('div'); n.className='cart-notification'; n.textContent = `✓ ${text}`; document.body.appendChild(n);
  setTimeout(()=> n.classList.add('show'),10); setTimeout(()=>{n.classList.remove('show'); setTimeout(()=>n.remove(),300)},1800);
}

function setupAddButtons(){
  document.querySelectorAll('.product-card').forEach(card=>{
    const btn = card.querySelector('.btn-secondary');
    if(!btn) return;
    const title = card.querySelector('h3').textContent;
    const price = parseFloat(card.querySelector('.price').textContent.replace('$',''))||0;
    btn.addEventListener('click',()=> addToShoeCart(title,price));
  });
}

function setupFilters(){
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-filter');
      document.querySelectorAll('.product-card').forEach(card=>{
        const cat = card.getAttribute('data-category');
        card.style.display = (f==='all' || f===cat) ? 'block':'none';
      });
    });
  });
  const search = document.querySelector('.search-input');
  if(search) search.addEventListener('input',(e)=>{
    const v = e.target.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card=>{
      const t = card.querySelector('h3').textContent.toLowerCase();
      const d = card.querySelector('.description').textContent.toLowerCase();
      card.style.display = (t.includes(v)||d.includes(v))? 'block':'none';
    });
  });
}

function setupNav(){
  const ham = document.querySelector('.hamburger'); const nav = document.querySelector('.nav-links');
  if(ham) ham.addEventListener('click',()=>{nav.classList.toggle('active'); ham.classList.toggle('active')});
}

function setupCartIcon(){
  const ci = document.querySelector('.cart-icon'); if(!ci) return;
  ci.addEventListener('click',()=>{
    if(shoeCart.length===0) return alert('Cart is empty');
    let out = 'Cart:\n\n'; let total=0;
    shoeCart.forEach(i=>{ out+=`${i.name} x${i.quantity} - $${(i.price*i.quantity).toFixed(2)}\n`; total+=i.price*i.quantity; });
    out+=`\nTotal: $${total.toFixed(2)}`; alert(out);
  });
}

function setupScrollTop(){const s = document.querySelector('.scroll-to-top'); if(!s) return; window.addEventListener('scroll',()=>{s.style.display = window.pageYOffset>300? 'flex':'none'}); s.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}

document.addEventListener('DOMContentLoaded',()=>{
  loadShoeCart(); setupAddButtons(); setupFilters(); setupNav(); setupCartIcon(); setupScrollTop();
});
