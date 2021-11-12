module.exports = {
  mode: 'jit',
  purge: ['./*.html','./*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', 
  theme: {
    // Tự config dữ liệu theo ý muốn
    extend: { 
      spacing: { 
        35: "35px",
      },
      colors: {
        gray33: "#333",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd']
    },
  },
  plugins: [],
}

// darkMode: 'media' -> Giả sử máy tính chúng ta có hỗ trợ 2 chế độ là light-mode và dark-mode (như macbook chẳng hạn). Tuy nhiên khuyến khích dùng darkMode: 'class' để dễ dàng tuỳ chỉnh theo ý thích
