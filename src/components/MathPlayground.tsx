import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Layers, Sliders, Info } from 'lucide-react';

export const MathPlayground = () => {
  const [activeTab, setActiveTab] = useState<'kernel' | 'frequency'>('kernel');

  // Kernel visualizer state
  const [selectedKernel, setSelectedKernel] = useState<string>('sobel-x');
  const [customKernel, setCustomKernel] = useState<number[]>([
    -1, 0, 1,
    -2, 0, 2,
    -1, 0, 1
  ]);

  // Frequency slider state
  const [frequencyHintAlpha, setFrequencyHintAlpha] = useState<number>(75);
  const [lambdaNoise, setLambdaNoise] = useState<number>(45);

  const presetKernels: { [key: string]: { name: string; matrix: number[]; desc: string; layExplain: string } } = {
    'sobel-x': {
      name: 'Sobel Horizontal (Gx)',
      matrix: [-1, 0, 1, -2, 0, 2, -1, 0, 1],
      desc: 'Mendeteksi batas vertikal objek dengan menghitung gradien spasial sumbu horizontal.',
      layExplain: 'Menonjolkan garis tegak pada gambar (misal tiang, dinding, garis tubuh).'
    },
    'sobel-y': {
      name: 'Sobel Vertical (Gy)',
      matrix: [-1, -2, -1, 0, 0, 0, 1, 2, 1],
      desc: 'Mendeteksi batas horizontal objek dengan menghitung gradien spasial sumbu vertikal.',
      layExplain: 'Menonjolkan garis mendatar pada gambar (misal garis lantai, batas meja).'
    },
    'laplacian': {
      name: 'Laplacian (2nd Derivative)',
      matrix: [0, 1, 0, 1, -4, 1, 0, 1, 0],
      desc: 'Mengukur laju perubahan intensitas piksel secara cepat (turunan kedua) ke segala arah.',
      layExplain: 'Menangkap seluruh kontur tepi gambar secara menyeluruh.'
    },
    'gaussian': {
      name: 'Gaussian Approximation',
      matrix: [1, 2, 1, 2, 4, 2, 1, 2, 1],
      desc: 'Filter low-pass untuk mereduksi derau acak dan melembutkan tekstur gambar.',
      layExplain: 'Menghaluskan/memburamkan gambar untuk menyaring bintik derau (noise).'
    }
  };

  const handleKernelSelect = (key: string) => {
    setSelectedKernel(key);
    if (presetKernels[key]) {
      setCustomKernel([...presetKernels[key].matrix]);
    }
  };

  const handleMatrixChange = (index: number, val: number) => {
    const updated = [...customKernel];
    updated[index] = val;
    setCustomKernel(updated);
    setSelectedKernel('custom');
  };

  return (
    <section id="playground" className="relative py-28 md:py-36 bg-[#040507] overflow-hidden border-t border-[#c5a059]/15">
      {/* Background Magic Ambiance */}
      <div className="absolute top-[15%] right-[-5%] w-[480px] h-[480px] bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[480px] h-[480px] bg-[#38bdf8]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header with Dual Label */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d121c] border border-[#c5a059]/40 text-[#f5e6be] text-xs font-cinzel tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>The Arithmancy Chamber · Laboratorium Interaktif</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5e6be]">
            Mathematical & Vision <span className="text-gold-gradient">Playground</span>
          </h2>

          <div className="filigree-divider max-w-sm">
            <span>❖</span>
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-[#a8a092] leading-relaxed">
            Eksplorasi interaktif: saksikan langsung bagaimana angka pada matriks memanipulasi piksel citra digital serta bagaimana dekomposisi frekuensi RCDNet mengikis derau hujan.
          </p>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-[#0d121c] border border-[#c5a059]/25 shadow-xl">
            <button
              onClick={() => setActiveTab('kernel')}
              className={`px-5 py-2 rounded-full text-xs font-cinzel font-semibold tracking-wider transition-all ${
                activeTab === 'kernel'
                  ? 'bg-gradient-to-r from-[#f5e6be] to-[#c5a059] text-[#07080c] shadow-[0_0_12px_rgba(212,175,55,0.3)] font-bold'
                  : 'text-[#a8a092] hover:text-[#f5e6be]'
              }`}
            >
              1. Simulator Konvolusi Matriks 3×3
            </button>
            <button
              onClick={() => setActiveTab('frequency')}
              className={`px-5 py-2 rounded-full text-xs font-cinzel font-semibold tracking-wider transition-all ${
                activeTab === 'frequency'
                  ? 'bg-gradient-to-r from-[#e0f7fa] to-[#38bdf8] text-[#07080c] shadow-[0_0_12px_rgba(56,189,248,0.3)] font-bold'
                  : 'text-[#a8a092] hover:text-[#e0f7fa]'
              }`}
            >
              2. Dekomposisi Frekuensi RCDNet
            </button>
          </div>
        </div>

        {/* Tab 1: 3x3 Convolution Simulator */}
        {activeTab === 'kernel' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="hogwarts-card p-8 sm:p-10 rounded-3xl corner-clasps"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#f5e6be] tracking-wide">
                    Spatial Convolution Kernel
                  </h3>
                  <p className="text-xs text-[#a8a092] mt-1.5">
                    Pilih filter matematis atau ubah angka pada kotak matriks 3×3 untuk melihat respons transformasi citra di sebelah kanan.
                  </p>
                </div>

                {/* Layman Explain Box */}
                <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#38bdf8]/30 flex items-start gap-3">
                  <Info className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#c9c2ad] leading-relaxed">
                    <strong className="text-[#38bdf8]">Penjelasan Awam: </strong>
                    {presetKernels[selectedKernel]?.layExplain || 'Angka-angka matriks berfungsi seperti lensa matematis yang menonjolkan fitur tertentu dari piksel foto.'}
                  </p>
                </div>

                {/* Presets */}
                <div className="flex flex-wrap gap-2">
                  {Object.keys(presetKernels).map((key) => (
                    <button
                      key={key}
                      onClick={() => handleKernelSelect(key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        selectedKernel === key
                          ? 'bg-[#182338] border border-[#d4af37] text-[#f5e6be] shadow-[0_0_10px_rgba(212,175,55,0.25)]'
                          : 'bg-[#0a0d14] border border-[#c5a059]/20 text-[#8a95a5] hover:text-[#e8e1d1]'
                      }`}
                    >
                      {presetKernels[key].name}
                    </button>
                  ))}
                </div>

                {/* 3x3 Matrix Grid */}
                <div className="p-4 rounded-2xl bg-[#0d121c] border border-[#c5a059]/30 max-w-[260px] mx-auto lg:mx-0 shadow-inner">
                  <div className="grid grid-cols-3 gap-2">
                    {customKernel.map((val, idx) => (
                      <input
                        key={idx}
                        type="number"
                        value={val}
                        onChange={(e) => handleMatrixChange(idx, Number(e.target.value) || 0)}
                        className="w-16 h-14 bg-[#07080c] border border-[#c5a059]/40 rounded-xl text-center font-mono font-bold text-[#f5e6be] focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_10px_rgba(212,175,55,0.4)] text-sm transition-all"
                      />
                    ))}
                  </div>
                </div>

                {/* Discrete Formula */}
                <div className="text-xs text-[#a8a092] font-mono bg-[#07080c] p-3 rounded-xl border border-[#c5a059]/20">
                  <span className="text-[#d4af37] font-bold">Formula Konvolusi Diskrit: </span>
                  <code className="text-[#38bdf8]">G(x,y) = ∑∑ K(i,j) · I(x-i, y-j)</code>
                </div>
              </div>

              {/* Right Output */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                  {/* Original */}
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-mono text-[#8a95a5] mb-2">Input Citra I(x,y)</span>
                    <div className="w-full h-48 rounded-xl overflow-hidden border border-[#c5a059]/20 bg-[#07080c] relative">
                      <img
                        src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=400&q=80"
                        alt="Original representation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Convolved Map */}
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-mono text-[#38bdf8] mb-2">Peta Fitur Hasil (K * I)</span>
                    <div className="w-full h-48 rounded-xl overflow-hidden border border-[#38bdf8]/50 bg-[#07080c] relative flex items-center justify-center p-2 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                      <div
                        className="w-full h-full rounded-lg overflow-hidden transition-all duration-300 relative"
                        style={{
                          filter:
                            selectedKernel === 'sobel-x'
                              ? 'grayscale(100%) contrast(300%) invert(30%)'
                              : selectedKernel === 'sobel-y'
                              ? 'grayscale(100%) contrast(350%) brightness(120%)'
                              : selectedKernel === 'laplacian'
                              ? 'grayscale(100%) invert(100%) contrast(400%)'
                              : selectedKernel === 'gaussian'
                              ? 'blur(2px) brightness(95%)'
                              : 'grayscale(100%) contrast(250%)'
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=400&q=80"
                          alt="Convolved output"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-[#07080c]/90 text-[#38bdf8] border border-[#38bdf8]/40">
                        Active Tensor
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-center text-[#8a95a5] mt-4 font-mono max-w-md">
                  {presetKernels[selectedKernel]?.desc || 'Bobot matriks kustom secara dinamis membentuk respons gradien spasial.'}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Frequency Decomposition (RCDNet) */}
        {activeTab === 'frequency' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="hogwarts-card p-8 sm:p-10 rounded-3xl corner-clasps"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#f5e6be] tracking-wide">
                    RCDNet Frequency Decomposition
                  </h3>
                  <p className="text-xs text-[#a8a092] mt-1.5">
                    Simulasikan bagaimana kanal *Frequency Hint* memisahkan garis hujan berfrekuensi tinggi (R) dari struktur latar belakang (B).
                  </p>
                </div>

                {/* Slider 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#f5e6be]">Perhatian Petunjuk Frekuensi (α)</span>
                    <span className="text-[#38bdf8] font-bold">{frequencyHintAlpha}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={frequencyHintAlpha}
                    onChange={(e) => setFrequencyHintAlpha(Number(e.target.value))}
                    className="w-full accent-[#38bdf8] bg-[#101524] rounded-lg cursor-pointer h-2"
                  />
                  <p className="text-[11px] text-[#8a95a5]">Semakin tinggi, semakin tajam isolasi garis hujan dari tekstur latar belakang.</p>
                </div>

                {/* Slider 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#f5e6be]">Regularisasi Kekurangan Derau (λ)</span>
                    <span className="text-[#d4af37] font-bold">{lambdaNoise / 100}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={lambdaNoise}
                    onChange={(e) => setLambdaNoise(Number(e.target.value))}
                    className="w-full accent-[#d4af37] bg-[#101524] rounded-lg cursor-pointer h-2"
                  />
                </div>

                {/* Unfolding Equation */}
                <div className="p-4 rounded-xl bg-[#07080c] border border-[#c5a059]/25 font-mono text-xs text-[#8a95a5] space-y-1">
                  <div className="text-[10px] text-[#d4af37] uppercase tracking-wider">Tahap Optimasi Unfolded:</div>
                  <div className="text-[#38bdf8]">
                    B^(k+1) = prox_g( B^(k) - η ∇_B L(B^(k), R^(k); F_hint) )
                  </div>
                </div>
              </div>

              {/* Right Output */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="relative w-full max-w-md h-60 rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80"
                    alt="Restoration simulation"
                    className="w-full h-full object-cover"
                    style={{
                      filter: `contrast(${100 + (frequencyHintAlpha - 50) * 0.4}%) brightness(${95 + (frequencyHintAlpha - 50) * 0.08}%)`
                    }}
                  />
                  {/* Dynamic simulated rain streak overlay that disappears as frequency hint goes to 100 */}
                  <div
                    className="absolute inset-0 bg-repeat pointer-events-none transition-opacity duration-300"
                    style={{
                      opacity: Math.max(0, 1 - frequencyHintAlpha / 90),
                      backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.45) 1px, transparent 1px)',
                      backgroundSize: '8px 16px'
                    }}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#07080c]/90 backdrop-blur-md border border-[#38bdf8]/40 text-[10px] font-mono text-[#38bdf8]">
                    Estimasi Kualitas Restorasi: {Math.round(28 + (frequencyHintAlpha / 100) * 8.2)} dB PSNR
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 text-xs font-mono text-[#8a95a5]">
                  <span>Subruang Terurai:</span>
                  <span className="text-[#38bdf8]">Frekuensi Rendah (Struktur)</span>
                  <span>+</span>
                  <span className="text-[#d4af37]">Frekuensi Tinggi (Garis Hujan)</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
