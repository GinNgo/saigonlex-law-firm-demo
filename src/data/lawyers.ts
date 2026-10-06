export interface Lawyer {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  education: string[];
  practices: string[];
  barAssociation: string;
  languages: string[];
  isDemoPlaceholder: boolean;
}

export const LAWYERS: Lawyer[] = [
  {
    id: "lawyer-1",
    name: "Luật sư Nguyễn Văn Thành",
    role: "Luật sư Điều hành (Managing Partner)",
    department: "Ban Quản trị & Tư vấn Chiến lược M&A",
    image: "/images/lawyer-1.png",
    bio: "Chuyên trách tư vấn quản trị cấp cao cho các tập đoàn đa quốc gia và các giao dịch mua bán sáp nhập quy mô lớn tại Việt Nam. (Hồ sơ nhân sự mẫu – Vui lòng cập nhật thông tin luật sư chính thức khi triển khai).",
    education: [
      "Thạc sĩ Luật Thương mại Quốc tế – ĐH Luật TP.HCM (DEMO)",
      "Cử nhân Luật học chuyên ngành Luật Dân sự & Kinh tế (DEMO)"
    ],
    practices: ["Tư vấn Doanh nghiệp", "Mua bán sáp nhập (M&A)", "Đầu tư nước ngoài (FDI)"],
    barAssociation: "Đoàn Luật sư TP. Hồ Chí Minh [DEMO-BAR-01]",
    languages: ["Tiếng Việt", "Tiếng Anh"],
    isDemoPlaceholder: true
  },
  {
    id: "lawyer-2",
    name: "Luật sư Trần Thị Thu Trang",
    role: "Luật sư Thành viên (Partner)",
    department: "Trưởng Bộ phận Hợp đồng & Pháp lý Thương mại",
    image: "/images/lawyer-2.png",
    bio: "Hơn 12 năm kinh nghiệm thực chiến trong đàm phán hợp đồng thương mại quốc tế, tái cấu trúc chuỗi cung ứng và sở hữu trí tuệ doanh nghiệp. (Hồ sơ nhân sự mẫu – Vui lòng cập nhật ảnh và tiểu sử thực tế).",
    education: [
      "Thạc sĩ Luật Kinh tế – ĐH Kinh tế – Luật (ĐHQG TP.HCM) (DEMO)",
      "Chứng chỉ Chuyên gia Đàm phán Hợp đồng Quốc tế (DEMO)"
    ],
    practices: ["Hợp đồng Thương mại", "Nhượng quyền & Phân phối", "Sở hữu trí tuệ"],
    barAssociation: "Đoàn Luật sư TP. Hồ Chí Minh [DEMO-BAR-02]",
    languages: ["Tiếng Việt", "Tiếng Anh", "Tiếng Pháp"],
    isDemoPlaceholder: true
  },
  {
    id: "lawyer-3",
    name: "Luật sư Lê Hoàng Nam",
    role: "Luật sư Thành viên Cấp cao (Senior Partner)",
    department: "Trưởng Bộ phận Tranh tụng & Trọng tài Thương mại",
    image: "/images/lawyer-3.png",
    bio: "Kinh nghiệm phong phú trong tố tụng dân sự, kinh doanh thương mại và tranh chấp cổ đông phức tạp tại Tòa án các cấp và Trung tâm Trọng tài VIAC. (Hồ sơ minh họa DEMO).",
    education: [
      "Cử nhân Luật Tư pháp – Đại học Luật Hà Nội (DEMO)",
      "Khóa đào tạo Kỹ năng Tranh tụng Chuyên sâu – Học viện Tư pháp (DEMO)"
    ],
    practices: ["Tranh tụng Dân sự", "Trọng tài Quốc tế (VIAC)", "Đất đai & Bất động sản"],
    barAssociation: "Đoàn Luật sư TP. Hà Nội [DEMO-BAR-03]",
    languages: ["Tiếng Việt", "Tiếng Anh"],
    isDemoPlaceholder: true
  },
  {
    id: "lawyer-4",
    name: "Luật sư Đặng Minh Khôi",
    role: "Luật sư Cố vấn (Senior Associate)",
    department: "Bộ phận Tư vấn Dự án Đầu tư & Bất động sản",
    image: "/images/lawyer-4.png",
    bio: "Chuyên sâu về thẩm định pháp lý dự án (Due Diligence), pháp luật đất đai mới theo Luật Đất đai 2024 và thủ tục cấp phép đầu tư FDI. (Hồ sơ minh họa DEMO).",
    education: [
      "Cử nhân Luật Quốc tế – Khoa Luật ĐHQG Hà Nội (DEMO)",
      "Chứng chỉ Quản trị Rủi ro Doanh nghiệp (DEMO)"
    ],
    practices: ["Đất đai & Bất động sản", "Tư vấn Đầu tư FDI", "Cấp phép dự án"],
    barAssociation: "Đoàn Luật sư TP. Hồ Chí Minh [DEMO-BAR-04]",
    languages: ["Tiếng Việt", "Tiếng Anh", "Tiếng Nhật (N2)"],
    isDemoPlaceholder: true
  }
];
