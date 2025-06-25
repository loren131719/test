<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>$JEETS Token</title>
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&amp;family=Orbitron&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com"></script>
<style>
        body {
            font-family: 'Chakra Petch', sans-serif;
            background: linear-gradient(to bottom, #040b1a, #0a192f);
            color: #fff;
            overflow-x: hidden;
        }
        .chakra-petch-bold {
            font-family: 'Chakra Petch', sans-serif;
            font-weight: 700;
        }
        .chakra-petch-regular {
            font-family: 'Chakra Petch', sans-serif;
            font-weight: 400;
        }
        .orbitron {
            font-family: 'Orbitron', sans-serif;
        }
        .neon-glow {
            box-shadow: 0 0 5px #00e0e0, 0 0 10px #00e0e0, 0 0 15px #00e0e0, 0 0 20px #a020f0;
        }
        .neon-glow-pink {
            box-shadow: 0 0 5px #ff1b6b, 0 0 10px #ff1b6b, 0 0 15px #ff1b6b, 0 0 20px #ff1b6b;
        }
        .neon-text-teal {
            text-shadow: 0 0 5px #00e0e0, 0 0 10px #00e0e0;
        }
        .neon-text-purple {
            text-shadow: 0 0 5px #a020f0, 0 0 10px #a020f0;
        }
        .neon-text-pink {
            text-shadow: 0 0 5px #ff1b6b, 0 0 10px #ff1b6b;
        }
        .btn-buy {
            background-color: #ff1b6b;
            border-color: #ff1b6b;
            transition: all 0.3s ease;
        }
        .btn-buy:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px #ff1b6b, 0 0 25px #ff1b6b, 0 0 35px #ff1b6b;
        }
        .particle {
            position: absolute;
            background-color: #39ff14;
            border-radius: 50%;
            opacity: 0.7;
            animation: float 5s infinite ease-in-out;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        .glitch {
            animation: glitch-effect 2s infinite steps(2, end);
        }
        @keyframes glitch-effect {
            0% { clip-path: inset(50% 0 30% 0); }
            20% { clip-path: inset(10% 0 70% 0); }
            40% { clip-path: inset(80% 0 5% 0); }
            60% { clip-path: inset(30% 0 40% 0); }
            80% { clip-path: inset(60% 0 20% 0); }
            100% { clip-path: inset(50% 0 30% 0); }
        }
    </style>
</head>
<body class="bg-[#040b1a]">
<div class="fixed inset-0 pointer-events-none z-0">
<div class="particle" style="width: 3px; height: 3px; left: 10%; top: 20%; animation-delay: 0s;"></div>
<div class="particle" style="width: 2px; height: 2px; left: 25%; top: 50%; animation-delay: 1s;"></div>
<div class="particle" style="width: 4px; height: 4px; left: 40%; top: 80%; animation-delay: 0.5s;"></div>
<div class="particle" style="width: 3px; height: 3px; left: 55%; top: 30%; animation-delay: 1.5s;"></div>
<div class="particle" style="width: 2px; height: 2px; left: 70%; top: 60%; animation-delay: 0.2s;"></div>
<div class="particle" style="width: 4px; height: 4px; left: 85%; top: 10%; animation-delay: 1.8s;"></div>
</div>
<nav class="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md p-4">
<div class="container mx-auto flex justify-between items-center">
<div class="text-2xl chakra-petch-bold neon-text-teal cursor-pointer hover:animate-pulse">$JEETS</div>
<div class="hidden md:flex space-x-6 items-center">
<a class="hover:text-[#00e0e0] neon-text-teal transition-colors" href="#about">ABOUT</a>
<a class="hover:text-[#00e0e0] neon-text-teal transition-colors" href="#how-to-buy">HOW TO BUY</a>
<a class="hover:text-[#00e0e0] neon-text-teal transition-colors" href="#tokenomics">TOKENOMICS</a>
<a class="hover:text-[#00e0e0] neon-text-teal transition-colors" href="#community">COMMUNITY</a>
<a class="bg-[#ff1b6b] text-white px-6 py-2 rounded-md chakra-petch-bold btn-buy neon-glow-pink" href="#">BUY
                    NOW</a>
</div>
<div class="md:hidden">
<button class="text-white focus:outline-none" id="mobile-menu-button">
<span class="material-icons text-3xl">menu</span>
</button>
</div>
</div>
<div class="hidden md:hidden mt-4 bg-black bg-opacity-70 rounded-lg p-4" id="mobile-menu">
<a class="block py-2 px-4 text-sm hover:bg-[#00e0e0] hover:text-black rounded-md" href="#about">ABOUT</a>
<a class="block py-2 px-4 text-sm hover:bg-[#00e0e0] hover:text-black rounded-md" href="#how-to-buy">HOW TO BUY</a>
<a class="block py-2 px-4 text-sm hover:bg-[#00e0e0] hover:text-black rounded-md" href="#tokenomics">TOKENOMICS</a>
<a class="block py-2 px-4 text-sm hover:bg-[#00e0e0] hover:text-black rounded-md" href="#community">COMMUNITY</a>
<a class="block mt-2 text-center bg-[#ff1b6b] text-white px-6 py-2 rounded-md chakra-petch-bold btn-buy neon-glow-pink" href="#">BUY
                NOW</a>
</div>
</nav>
<section class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 md:pt-0" id="hero">
<div class="absolute inset-0 z-0">
<img alt="Distant cyberpunk cityscape with Midgar-inspired structures" class="absolute inset-0 w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDBhQU_Exm2EezB-MXByuSFNCVB_mg_uj4JV2FcD2AeydUMW2KU0etqSlcKya4xlzjO7VGkddebOEBEdeBTWEM64bVduK_woicF-U9H3_fnIiSpPE1-E-9Yd3McUGuPpCfCkith5e2IGQbp7YT1xH2m8X2qGd9baDg3JYT3aRshG3Gf-6CQyFg6QVa9uoPPc6jA7ZdrfCEu2DxDDUkErTpO1UxttLGhq1ANn90jP5-vUuRDouSyM436Jdt944S_NSfPQzUec2_ts0" style="transform: translateZ(-30px) scale(1.3);"/>
<img alt="Mid-distance buildings with animated neon billboards" class="absolute inset-0 w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJdxKBpkXDcu4Bbo7DJaQ3VtLv0gZXDiLgTMll3UgY2UwqBe6X5o_ZrLkjMFYHutdX48FFUE5URzotA9Colp9Hg-0EPaRqsvthG8eujxhEBy59jmgPMlbJjSA3Ha6t0kWPvAdgnksp1MT5_5wJuEI2BlQCkMp-7JxB3dcxfA5sKkkr2U4AgJSkYU0LG0sgVOnlOH2cT20GTcphUbZRRPf_YOrNnjm_rI6D6h3tBJQDeSE4WiqU4mANYmJEcs3m50_nWktAHVwruog" style="transform: translateZ(-20px) scale(1.2);"/>
<img alt="Foreground detailed futuristic building with a glowing laboratory" class="absolute inset-0 w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCVj5hNyOhg_Nr5V0XtM_mIH93FpmaZVgDcwe-5hKlOkO7j0uTigRHdZ9mSwpAmMcS24mvkbkcshKRX_KP1-eOfI1RG8j4HQsgnh1tYzgJp1vcVj8Ibr932HkOuYjIpF4lxs557JWi5DisLjOz3EukvUHOR8ziylo-TU2asGR0_RwgyRHwOhGJqh00T4f0Iati-dUY12YAlLZ5F6sZtqau2R57wcwKb2JPMAAJeiuU36faiobPzsmxn-a2FFHlXene5TSV-M-al6o" style="transform: translateZ(-10px) scale(1.1);"/>
</div>
<div class="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
<div class="text-center md:text-left md:w-1/2 mb-10 md:mb-0">
<h1 class="text-5xl md:text-7xl chakra-petch-bold neon-text-teal mb-4 glitch">$JEETS</h1>
<p class="text-3xl md:text-4xl chakra-petch-bold text-[#a020f0] mb-2 neon-text-purple">Tifa's Arms, Your Gains</p>
<p class="text-lg md:text-xl text-gray-300 mb-8">The Only Token With Both Waifu and Financial Advice</p>
<a class="bg-[#ff1b6b] text-white px-8 py-3 rounded-md text-xl chakra-petch-bold btn-buy neon-glow-pink inline-block" href="#">BUY
                    $JEETS</a>
</div>
<div class="md:w-1/2 flex justify-center md:justify-end">
<img alt="Tifa in a confident stance with a glowing mechanical arm" class="w-3/4 md:w-[80%] max-w-md md:max-w-lg object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCovlUm1kmjUKTvsDJ_dnq20-xEHwdarKS8KJNwdo_m6gfZvnXQ_kNnXOvp3Dm1ebeSYfKA3ladGColxXxnzp44Jy1tcTrrd5BgmQmaLUwVegcb2oFu6GD-GsaI_p2QyIL2OPJCbImVYJjnnw6M-xoyWtNnBQoLd_WJm_opOhkNMLHV8Sl6pXngPI8vrIKroRSpzwntTGERZ6TXyAtP5n4nWsNvLXp3qd6-8VMlpWgPvJcysellne-PLhDpUcAB89JvnEyIcXvxUNY" style="filter: drop-shadow(0 0 15px #00e0e0);"/>
</div>
</div>
<img alt="Surveillance drone" class="absolute top-1/4 right-1/4 w-16 opacity-60 animate-pulse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6X8WpwvhVpRs27PscBG1R7wlOeKWY2K4AKVZUduHwKoUrXTiW5d_DTjGG7LE1R3jsxoJVWV5axe1152qCWvF8yT3t3OxY8Dudu124TEPSKQy3UPGl0aCIbbZmbjTeOWk7TWrLZ_rDfTOtCSrsuQ8yuus7SFS7QokIEQ4MRbV9IiMEgkbwn3P26wQ_lapORrDD2PziP-JAtmq9x8KqUK7my4g6-soNIMBw83BCGwmXrbkN_adn_qcbgROuEKA-0rmT1SPldwEGRBg" style="animation-duration: 5s;"/>
</section>
<section class="py-20 px-4 bg-opacity-20 bg-black relative" id="about">
<div class="absolute inset-0 opacity-10" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuZ1JWmR82Or-FySLDG9zwMt2LUxj62tQwvhA35NALIDd9KXI8pBy-0qUNqrauAMMBzJ2qj7YSaeTDzRwBzHtvhzjYt0mqmgyY8hM4EUltShgMHwFtNrCaQ9e7-7GpUfMloXpgxuCGd8sFHP8iMTEMDx2Ufi0X-r7HHQzqCmoztE5S3Gllj--YvxDpljTRmpnRA2C96Qm_rBSe2zYeZsHLuoi4xvC7jzHicuuR954HqQkumfP7ars2bJtn5G5ZB6I6O_5Rijr20ns'); background-size: cover;"></div>
<div class="container mx-auto relative z-10">
<h2 class="text-4xl md:text-5xl chakra-petch-bold text-center mb-4 neon-text-teal glitch">JEETS = PURE DIGITAL EUPHORIA
            </h2>
<p class="text-xl text-center text-[#a020f0] mb-12 neon-text-purple">The token that turns FOMO into ecstasy</p>
<div class="flex flex-col md:flex-row items-center gap-12">
<div class="md:w-1/3 text-center">
<img alt="Tifa punching FUD messages" class="w-full max-w-sm mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmHvxdjAcK60oDVN3hvVdaJ8KA8OL17fvksdN9TRQK9gID6kTfgk4BYZFqsaS6bMrtVCqhI53aosW_bZT6CqNqSXQRzM4c5rqlBNFew69-36MqqV-ao4nIbnTcDvHyCLQxHykyMzYPi8c4GlTSOoKxRiEjimHpPUDYLNdCaXCEZaygvtGbI7YMlkvWacGTr0dOc6hAIraWfabrsq2pFNtPlMMlEZsdCr7-WPVZG97HvaXgrEZHmsGHuwWYxHzRt5FJeuH9wXso_NE" style="filter: drop-shadow(0 0 10px #ff1b6b);"/>
</div>
<div class="md:w-2/3">
<p class="text-lg chakra-petch-regular mb-6 leading-relaxed">
                        In the chaotic, high-octane world of crypto, a "jeet" is someone who sells their tokens too early, missing out on massive gains. They're plagued by FUD (Fear, Uncertainty, and Doubt), paper-handing at the slightest dip. $JEETS embraces this meme, flipping the script. We're not about regret; we're about the raw, unfiltered energy of the crypto space. This token is a wild ride, a digital high, a community that laughs in the face of volatility. 
                    </p>
<div class="bg-[#0a192f] p-6 rounded-lg shadow-xl border border-[#00e0e0]/50">
<h3 class="text-2xl chakra-petch-bold mb-4 text-[#39ff14] neon-text-green">Community Chatter:</h3>
<div class="space-y-3">
<div class="bg-[#040b1a] p-3 rounded-md text-sm flex items-center animate-pulse" style="animation-duration: 3s;"> <span class="text-[#00e0e0] mr-2 chakra-petch-bold">User420:</span> wen moon ser? 🚀🌕</div>
<div class="bg-[#040b1a] p-3 rounded-md text-sm flex items-center animate-pulse" style="animation-duration: 3.5s;"> <span class="text-[#00e0e0] mr-2 chakra-petch-bold">CryptoQueen:</span> Bullish pattern forming! $JEETS to $1! 📈</div>
<div class="bg-[#040b1a] p-3 rounded-md text-sm flex items-center animate-pulse" style="animation-duration: 4s;"> <span class="text-[#a020f0] mr-2 chakra-petch-bold line-through">FUDster69:</span> This is a scam! (Punched away by Tifa!)</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="py-20 px-4" id="how-to-buy" style="background: linear-gradient(rgba(4,11,26,0.8), rgba(10,25,47,0.8)), url('image-trading-floor-bg.png') center/cover;">
<div class="container mx-auto">
<h2 class="text-4xl md:text-5xl chakra-petch-bold text-center mb-16 neon-text-teal">How to Get Your $JEETS High</h2>
<div class="grid md:grid-cols-4 gap-8 text-center">
<div class="bg-[#0a192f]/70 p-6 rounded-lg border border-[#a020f0]/50 neon-glow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#a020f0]">
<img alt="Tifa demonstrating wallet" class="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-2 border-[#00e0e0]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhH8Uxu76TEpMdJoDpT219l1LdByRG5cMjNHm_JioDL24KRVymJAEF8NoRIXpcHfZ7kt2BTbbSpuK89uNSxy_0m7-msX8emo_yGNGIraWXMG639FIIOCDTfme0sDy4OLd_RefepohwPGshtgyhXzpzfogFbgjwSPWt1ug9stOthQjMRISQrsKzZ2vwvAUkA5NUkR-elCV9dr8d_OT7Ln-NhSfSdJ6PcP5zoZdM8WFiGBB_B7z9lm1m1y5z-oOqOnS6iKGbErZeu_k"/>
<h3 class="text-2xl orbitron mb-2 text-[#39ff14]">01</h3>
<p class="chakra-petch-regular text-sm">Set up your HyperEVM wallet - it's like a vial for your digital high.</p>
</div>
<div class="bg-[#0a192f]/70 p-6 rounded-lg border border-[#a020f0]/50 neon-glow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#a020f0]">
<img alt="Tifa pointing at exchange interface" class="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-2 border-[#00e0e0]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlb_J5W7U2SJAHWA34SwvrGDkFBC49iMDjBx16ZvS3COm6d_ruFQFmnvVSQSBF-EYh7smuMyldFHOK3oYsua4VCAHM3fH-ZkkoKgEsY-e8HDQ3fx5JNkcqvwWh2uKGulZ99cn7g3T5-mXs0DdIgyYVqQ3R3Bl03o85yXknWm-hW9BHi6igbPnJKblo7A-KNlg8rRTJ1BnBaOFRLiz6vuA70kqbDG2ekFImyghNnBFAt-bHebXIUkwLbEWtY57V6B-J15KrYCN5yZg"/>
<h3 class="text-2xl orbitron mb-2 text-[#39ff14]">02</h3>
<p class="chakra-petch-regular text-sm">The token will be launched on mana.win. After bonding you will be able to buy through HyperSwap.</p>
</div>
<div class="bg-[#0a192f]/70 p-6 rounded-lg border border-[#a020f0]/50 neon-glow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#a020f0]">
<img alt="Tifa with animated tokens flowing" class="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-2 border-[#00e0e0]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqpVCQOw7AYO5A3Fg_d6b6T1HoWmbgU58_inL9FFOc4llmXwUokrwqe8JTd6J6BwicM630SKtFUD__TJ_YGn69ooXQcP6l8zxMypu-UVgO04DUVODxpjQ6bL_SCj3pOfE536cZXA04_q2TBkeDtUudSxTyTJ2ohDITXNQrrbUT-4OxX-D2T0vgOCzsBCFuD_MyniaNwnzlHniVdRabhVewtOcKyDNE8hPFzisSaKKCM2AuU8wfhhKhJcpXHaCgKhf_UXoDZ1ISVxs"/>
<h3 class="text-2xl orbitron mb-2 text-[#39ff14]">03</h3>
<p class="chakra-petch-regular text-sm">Swap HYPE for $JEETS tokens - the ultimate crypto rush.</p>
</div>
<div class="bg-[#0a192f]/70 p-6 rounded-lg border border-[#a020f0]/50 neon-glow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#a020f0]">
<img alt="Tifa giving thumbs up" class="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-2 border-[#00e0e0]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN4qF3tFQTvlPxyd9_g8n1F3mj2IEnDFa25jrR3Cu0iZPza0BXBGkQB4cY4FnDSbmnUmdGn9S_zDSLA2YPq0LT5M_0Cb6aSGQzlttcc4slDPmZRaRJMmZxKKnOjhcB4RpPrcoMnV-fP1m6Fvh4LW5xb5AnZ5dm5dlzdA-eFOyC2ZVJOkwg5lJUfyLMCy56xwrVcWpTlxXXu0t29IBztDFW9VoJoBe-kZ8FHFP_K8ZVPwdKsEub0Uj80ydPDLtYu8cxiL1as0CuV40"/>
<h3 class="text-2xl orbitron mb-2 text-[#39ff14]">04</h3>
<p class="chakra-petch-regular text-sm">Congratulations! You've scored the purest memecoin on HyperEVM.</p>
</div>
</div>
</div>
</section>
<section class="py-20 px-4 bg-black bg-opacity-50 relative" id="tokenomics" style="background-image: url('image-nightclub-bg.png'); background-blend-mode: overlay; background-size: cover;">
<div class="absolute inset-0 bg-black opacity-60"></div>
<div class="container mx-auto relative z-10">
<h2 class="text-4xl md:text-5xl chakra-petch-bold text-center mb-4 neon-text-teal">TOKENOMICS</h2>
<p class="text-xl text-center text-[#a020f0] mb-12 neon-text-purple">HIGH POTENCY FORMULA</p>
<div class="flex flex-col md:flex-row items-center gap-12">
<div class="md:w-2/5 relative">
<img alt="Tifa at DJ booth fending off bear symbols" class="w-full max-w-md mx-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNUg1LlOe9cdQPJcKoK4t1q_e7gdZvbgWJBStcpwcKG97WqrdZROwda1JcEBN6d2lIll_lGc3fduVDjhMgFGFBy6kwpjBaZk016xzO-laHaj4ekw275Ay4pVO2sEKTosqVMPJcnjLgXQSnAFbKHyFU25ylE1a_42YCsfadD_SYiK1tHc-Kkuo7zfmJwAaSst77TL7ZPwxWR26uRqvBybPwZxfJTaXzbo9AcCZ2CdceXPq2HgvrO-CrIu8It6DP3U9S4P2e-WLjwy8" style="filter: drop-shadow(0 0 15px #ff1b6b);"/>
<img alt="Bear market symbol" class="absolute top-10 left-5 w-16 opacity-70 animate-pulse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXP-Mkba8Y95uE8MOt0sceAXoqJwSMPdVIcFQK7kYGrc--3B0f0eNdlRsvwZogZnMAHQVtN_4HfaxRApwPxYTt9Y5yB2X4cWaE7RoYUrQvYDAYQO-d_ngAzpeSAzoPuCYYqp3OsrIn9rjgKkjZbHzfgwSIEDCDJcxpUAI6aNUz1G-9N97x2KnPJyCJNdiYJTv9Q3mOdz7d50bpdrBGHhKl6x3YM6K88NYWGLAyt32xkKNWCVj6e5M_QIgOGfm0n2mEekvwuIgnUfU" style="animation-duration: 3s; transform: rotate(-15deg);"/>
<img alt="Bear market symbol" class="absolute bottom-10 right-5 w-16 opacity-70 animate-pulse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApqsS50zsjxfEKulMmmQA9DTEsMyNqeif8Mrwje2NI5cO7zYi9uOCQ9e_XpVHtkUkkrbJnQosSUDq2ugUQYEbCQaY8a3RaaHaeKSp4jTHuGX5v_flxqTg-49y0QAckmlG6IR1ZBlUijInu3b7wwWDF2ZFcE7MEOoiBFJP-Ko2dsB-vcIqBWYhP4Dl_lgRW-q0RXvMUUvaFZ58Ov2K7XOWJovfL7f6xLXU_GMVSNlHzarb3-eH9Oydb1nRnMsX4Gh40AmQJEMdQZUM" style="animation-duration: 3.5s; transform: rotate(10deg);"/>
</div>
<div class="md:w-3/5">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div class="bg-[#0a192f]/80 p-6 rounded-lg border border-[#00e0e0]/50 neon-glow hover:border-[#39ff14] transition-colors">
<h3 class="text-2xl chakra-petch-bold text-[#00e0e0] mb-2">25% Airdropped</h3>
<p class="text-sm">To true degens who understand the vibe.</p>
</div>
<div class="bg-[#0a192f]/80 p-6 rounded-lg border border-[#00e0e0]/50 neon-glow hover:border-[#39ff14] transition-colors">
<h3 class="text-2xl chakra-petch-bold text-[#00e0e0] mb-2">30% Liquidity</h3>
<p class="text-sm">Locked and loaded for a smooth ride.</p>
</div>
<div class="bg-[#0a192f]/80 p-6 rounded-lg border border-[#00e0e0]/50 neon-glow hover:border-[#39ff14] transition-colors">
<h3 class="text-2xl chakra-petch-bold text-[#00e0e0] mb-2">20% Meme Fund</h3>
<p class="text-sm">Fueling the chaos and community creativity.</p>
</div>
<div class="bg-[#0a192f]/80 p-6 rounded-lg border border-[#00e0e0]/50 neon-glow hover:border-[#39ff14] transition-colors">
<h3 class="text-2xl chakra-petch-bold text-[#00e0e0] mb-2">25% Community Growth</h3>
<p class="text-sm">("Black Hole") - Let's expand the euphoria.</p>
</div>
</div>
<div class="mt-8 text-center space-y-2">
<p class="text-xl orbitron neon-text-pink"><span class="text-[#39ff14]">0%</span> Tax - Keep all your gains!</p>
<p class="text-xl orbitron neon-text-pink"><span class="text-[#39ff14]">100%</span> LP Burned - To the moon or Valhalla!</p>
</div>
</div>
</div>
</div>
</section>
<section class="py-20 px-4" id="community" style="background: linear-gradient(rgba(10,25,47,0.9), rgba(4,11,26,0.9)), url('image-digital-party-bg.png') center/cover fixed;">
<div class="container mx-auto text-center">
<h2 class="text-4xl md:text-5xl chakra-petch-bold mb-4 neon-text-teal">JOIN THE $JEETS EUPHORIA</h2>
<p class="text-xl text-[#a020f0] mb-12 neon-text-purple">Join thousands of other degens experiencing the ultimate crypto high.</p>
<div class="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
<img alt="Tifa welcoming to community" class="w-64 md:w-80 order-1 md:order-none mb-8 md:mb-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwatVB6p_1IU4kC1XauyrCXe0SPC3n6u2q5vkQUY8yoj-YB9EsEiJtCEgw_GPySEsuoSWM-oZY4e6EJhRLTZVpQIIaBDLJiYZWe5mOYui531ki2N1TOVTuhVYqGABM_uHHoUhcF4eMMlBGMN8dzlMc9EcLxMmAKK20osFFP9i1fi0FVAsS9aySp0QFuOFdEPc-078LXOe0r0wtzEDD-An3_wek5rE1ukzW0bIkKc3yPXEEjSPxSmMwkj3GeY9w8_QitqEp-n3t1FE" style="filter: drop-shadow(0 0 10px #00e0e0);"/>
<div class="flex flex-col sm:flex-row gap-6 order-2 md:order-none">
<a class="bg-[#00e0e0] text-black px-8 py-4 rounded-lg chakra-petch-bold text-lg flex items-center justify-center gap-2 neon-glow hover:bg-[#39ff14] hover:text-[#040b1a] transition-all duration-300 transform hover:scale-105" href="#">
<span class="material-icons">send</span> Telegram
                    </a>
<a class="bg-[#a020f0] text-white px-8 py-4 rounded-lg chakra-petch-bold text-lg flex items-center justify-center gap-2 neon-glow hover:bg-[#ff1b6b] transition-all duration-300 transform hover:scale-105" href="#">
<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                         X / Twitter
                    </a>
</div>
</div>
</div>
</section>
<footer class="py-12 px-4 bg-[#040b1a] border-t border-[#00e0e0]/30">
<div class="container mx-auto text-center text-gray-400 chakra-petch-regular text-sm">
<div class="flex justify-center items-center mb-6">
<img alt="Chibi Tifa waving" class="h-16 mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5kBV82Wlma_AsoD78dBL9HAgo-PedKcYEmiMvgPwL9B5adBNVEu9Mz-TzHnI0KabiMy9cpsLjFhQU9sN-42kIBoovVB98AQphCiWgodqRgJHUoNbyPxQJGCNEI9_8-ixuaOUyIz9JYO83gsW69C72Nn3zyrcKjZrOmdF974thDGe5_tXjrme6GH0VOcPHnYVmAbhJbJlUIoMwRC8VpBvOZNmCiU-KkkNOStne_bxBIGuJRd02Oj4BJjNGLjZGCNpZH2MZzRlt07g"/>
<div class="text-xl chakra-petch-bold neon-text-teal animate-pulse">$JEETS</div>
</div>
<p class="mb-2">© 2025 | $JEETS | All rights reserved</p>
<p class="mb-6 text-xs leading-relaxed max-w-2xl mx-auto">
                Disclaimer: $JEETS token is for entertainment purposes only and is inspired by meme culture. It is not financial advice and should not be considered an investment. Cryptocurrencies are highly volatile. Do your own research (DYOR) before engaging in any crypto markets. Participate at your own risk.
            </p>
<button class="bg-[#00e0e0] text-black p-3 rounded-full neon-glow hover:bg-[#39ff14] transition-colors" onclick="scrollToTop()">
<span class="material-icons">arrow_upward</span>
</button>
</div>
</footer>
<script>
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.querySelector('.material-icons').textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
        });
        // Parallax effect (simple version for example)
        const heroSection = document.getElementById('hero');
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = heroSection;
            const xPos = (clientX / offsetWidth - 0.5) * 30; // Adjust multiplier for intensity
            const yPos = (clientY / offsetHeight - 0.5) * 30;
            const layers = heroSection.querySelectorAll('.absolute.inset-0 img');
            layers.forEach((layer, index) => {
                const speed = (index + 1) * 0.5; // Different speed for each layer
                layer.style.transform = `translate(${xPos * speed}px, ${yPos * speed}px) scale(${1 + (index * 0.1)})`;
            });
        });
        // Scroll to top
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Particle generation (simple)
        const particleContainer = document.querySelector('.fixed.inset-0.pointer-events-none');
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.width = `${Math.random() * 3 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.backgroundColor = ['#00e0e0', '#a020f0', '#ff1b6b', '#39ff14'][Math.floor(Math.random() * 4)];
            particleContainer.appendChild(particle);
            setTimeout(() => {
                particle.remove();
            }, 5000); // Remove after animation ends
        }
        //setInterval(createParticle, 300); // Create new particles periodically
    </script>
</body></html>
