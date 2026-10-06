export interface LegalCase {
  id: string;
  title: string;
  clientType: string;
  field: string;
  challenge: string;
  solution: string;
  result: string;
  isAnonymizedDemo: boolean;
}

export const LEGAL_CASES: LegalCase[] = [
  {
    id: "case-1",
    title: "Thương vụ M&A chuỗi bán lẻ tiêu dùng đa kênh (Tình huống minh họa)",
    clientType: "Quỹ đầu tư tư nhân khu vực Đông Nam Á (Ẩn danh)",
    field: "Tư vấn Doanh nghiệp & M&A",
    challenge:
      "Bên mua đối mặt với mạng lưới 85 cửa hàng thuê mặt bằng có tính pháp lý phức tạp, giấy phép phòng cháy chữa cháy chưa hoàn thiện và rủi ro truy thu thuế của công ty mục tiêu.",
    solution:
      "Tiến hành Legal Due Diligence toàn diện trong 21 ngày, tái cấu trúc hợp đồng mua bán cổ phần (SPA) với điều khoản điều chỉnh giá mua và phong tỏa 18% giá trị vào tài khoản Escrow.",
    result:
      "Giao dịch hoàn tất thành công, bên mua kiểm soát 100% rủi ro thuế hồi tố và giữ trọn vẹn thương hiệu bán lẻ. (Minh họa năng lực tư vấn – Tình huống đã được ẩn danh theo chuẩn DEMO).",
    isAnonymizedDemo: true
  },
  {
    id: "case-2",
    title: "Tranh chấp hợp đồng thi công xây dựng công trình cảng biển (Tình huống minh họa)",
    clientType: "Tổng thầu thi công hạ tầng quốc tế (Ẩn danh)",
    field: "Trọng tài Thương mại (VIAC)",
    challenge:
      "Chủ đầu tư chậm trễ thanh toán các đợt phát sinh khối lượng hơn 120 tỷ VND, viện dẫn lý do thời tiết cực đoan và phạt chậm tiến độ vi phạm hợp đồng FIDIC.",
    solution:
      "Củng cố hệ thống hồ sơ nhật ký công trình, giám định khối lượng độc lập và bảo vệ lập luận pháp lý về sự kiện bất khả kháng tại Hội đồng Trọng tài Quốc tế.",
    result:
      "Hội đồng trọng tài ra phán quyết buộc chủ đầu tư thanh toán 94% tổng khối lượng phát sinh và lãi chậm trả. (Minh họa quy trình tranh tụng – Dữ liệu mẫu DEMO).",
    isAnonymizedDemo: true
  },
  {
    id: "case-3",
    title: "Tái cấu trúc sở hữu và giải quyết bất đồng cổ đông sáng lập (Tình huống minh họa)",
    clientType: "Doanh nghiệp công nghệ chuỗi cung ứng (Ẩn danh)",
    field: "Quản trị & Cổ đông",
    challenge:
      "Hai nhóm cổ đông lớn sở hữu tỷ lệ 50% - 50% rơi vào bế tắc (Deadlock) kéo dài 9 tháng, không thể thông qua báo cáo tài chính và phương án chi trả lương.",
    solution:
      "Vận dụng cơ chế thương lượng hòa giải độc lập, thiết lập Thỏa thuận mua lại cổ phần (Russian Roulette Buyout clause) công bằng dựa trên định giá độc lập.",
    result:
      "Hai bên hoàn tất việc thoái vốn êm đẹp trong 14 ngày mà không phải đưa vụ việc ra tòa án giải thể doanh nghiệp. (Tình huống giả định mẫu phục vụ xem giao diện DEMO).",
    isAnonymizedDemo: true
  }
];
