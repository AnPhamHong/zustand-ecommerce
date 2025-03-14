import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";

// Mở rộng colord để hỗ trợ tên màu (ví dụ: "red", "white")
extend([namesPlugin]);

// Hàm lấy màu từ tên hoặc random nếu không hợp lệ
export const getColorFromName = (colorName: string): string => {
  // Kiểm tra tên màu hợp lệ
  const isValidColor = colord(colorName).isValid();

  // Nếu hợp lệ => Trả về mã màu hex
  if (isValidColor) return colord(colorName).toHex();

  // Nếu không hợp lệ => Random màu pastel
  return colord({
    h: Math.random() * 360, // Hue: 0 - 360 (vòng tròn màu)
    s: 0.6 + Math.random() * 0.2, // Saturation: 60% - 80% (đậm nhạt)
    l: 0.7 + Math.random() * 0.2, // Lightness: 70% - 90% (sáng màu pastel)
  }).toHex();
};
