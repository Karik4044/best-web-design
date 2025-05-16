export const challenges = [
    // Sức khỏe category - 10 cards
    {
      id: 1,
      category: 'Sức khỏe', 
      title: 'Tập thể dục mỗi ngày',
      description: 'Dành 15-30 phút mỗi ngày để vận động cơ thể, tăng cường sức khỏe và năng lượng.',
      participants: '2,145 người tham gia',
      participantsCount: 2145,
      duration: '30 ngày',
      color: 'primary',
      icon: (
      <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.70001 7.75H4.25001C3.97387 7.75 3.75001 7.97386 3.75001 8.25V15.75C3.75001 16.0261 3.97387 16.25 4.25001 16.25H6.70001C6.97615 16.25 7.20001 16.0261 7.20001 15.75V8.25C7.20001 7.97386 6.97615 7.75 6.70001 7.75Z" fill="currentColor"/>
        <path d="M19.75 7.75H17.3C17.0239 7.75 16.8 7.97386 16.8 8.25V15.75C16.8 16.0261 17.0239 16.25 17.3 16.25H19.75C20.0262 16.25 20.25 16.0261 20.25 15.75V8.25C20.25 7.97386 20.0262 7.75 19.75 7.75Z" fill="currentColor"/>
        <path d="M7.20001 10.75H3.75001V13.25H7.20001V10.75Z" fill="currentColor"/>
        <path d="M20.25 10.75H16.8V13.25H20.25V10.75Z" fill="currentColor"/>
        <path d="M16.8 11.25H7.20001V12.75H16.8V11.25Z" fill="currentColor"/>
      </svg>
      )
    },
    {
      id: 2,
      category: 'Sức khỏe',
      title: 'Uống 2 lít nước mỗi ngày',
      description: 'Duy trì đủ nước cho cơ thể giúp tăng cường trao đổi chất và cải thiện sức khỏe tổng thể.',
      participants: '1,876 người tham gia',
      participantsCount: 1876,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 2h16l-1.5 18.5a2 2 0 0 1-1.99 1.5h-9.02a2 2 0 0 1-1.99-1.5L4 2zm2.2 2l1.3 15h9l1.3-15H6.2z" />
        </svg>
      )
    },
    {
      id: 3,
      category: 'Sức khỏe',
      title: 'Ngủ đủ 8 tiếng mỗi đêm',
      description: 'Đảm bảo giấc ngủ chất lượng giúp phục hồi cơ thể và cải thiện sức khỏe tinh thần.',
      participants: '1,543 người tham gia',
      participantsCount: 1543,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      )
    },
    {
      id: 4,
      category: 'Sức khỏe',
      title: 'Ăn 5 phần rau quả mỗi ngày',
      description: 'Bổ sung đủ rau củ quả giúp cung cấp vitamin và chất xơ cần thiết cho cơ thể.',
      participants: '1,234 người tham gia',
      participantsCount: 1234,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 5,
      category: 'Sức khỏe',
      title: 'Tập yoga 20 phút',
      description: 'Kết hợp các bài tập yoga đơn giản để cải thiện sự linh hoạt và thư giãn cơ thể.',
      participants: '1,123 người tham gia',
      participantsCount: 1123,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 6,
      category: 'Sức khỏe',
      title: 'Không ăn đồ chiên rán',
      description: 'Giảm lượng thức ăn chiên rán để cải thiện sức khỏe tim mạch và hệ tiêu hóa.',
      participants: '987 người tham gia',
      participantsCount: 987,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 7,
      category: 'Sức khỏe',
      title: 'Đi bộ 10.000 bước',
      description: 'Đạt mục tiêu 10.000 bước đi mỗi ngày để tăng cường sức khỏe tim mạch và duy trì cân nặng.',
      participants: '876 người tham gia',
      participantsCount: 876,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    },
    {
      id: 8,
      category: 'Sức khỏe',
      title: 'Giảm đường trong chế độ ăn',
      description: 'Hạn chế lượng đường tiêu thụ hàng ngày để cải thiện sức khỏe và giảm nguy cơ bệnh tật.',
      participants: '765 người tham gia',
      participantsCount: 765,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 9,
      category: 'Sức khỏe',
      title: 'Tập plank mỗi ngày',
      description: 'Bắt đầu với 30 giây và tăng dần thời gian để tăng cường cơ bụng và cải thiện tư thế.',
      participants: '654 người tham gia',
      participantsCount: 654,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 10,
      category: 'Sức khỏe',
      title: 'Ăn chậm nhai kỹ',
      description: 'Tập thói quen ăn chậm và nhai kỹ để cải thiện tiêu hóa và kiểm soát cân nặng.',
      participants: '543 người tham gia',
      participantsCount: 543,
      duration: '30 ngày',
      color: 'primary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
        </svg>
      )
    },
    // Rest of the code remains the same
    // Kỹ năng category - 10 cards
    {
      id: 11,
      category: 'Kỹ năng',
      title: 'Đọc sách 15 phút',
      description: 'Dành 15 phút mỗi ngày để đọc sách, mở rộng kiến thức và phát triển tư duy.',
      participants: '1,879 người tham gia',
      participantsCount: 1879,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
        </svg>
      )
    },
    {
      id: 12,
      category: 'Kỹ năng',
      title: 'Viết nhật ký',
      description: 'Dành thời gian mỗi ngày để viết nhật ký, ghi lại suy nghĩ và cảm xúc của bạn.',
      participants: '1,456 người tham gia',
      participantsCount: 1456,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 13,
      category: 'Kỹ năng',
      title: 'Học lập trình 30 phút',
      description: 'Dành 30 phút mỗi ngày để học và thực hành lập trình, phát triển kỹ năng công nghệ.',
      participants: '1,345 người tham gia',
      participantsCount: 1345,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 00-1.414 0l-4 12a1 1 0 101.414 1.414L9.414 14l1.293 1.293a1 1 0 001.414 0zM5.707 6.293a1 1 0 000 1.414L3.414 10l2.293 2.293a1 1 0 101.414-1.414l-3-3a1 1 0 000-1.414l3-3a1 1 0 001.414 0zm8.586 0a1 1 0 001.414 0l3 3a1 1 0 000 1.414l-3 3a1 1 0 10-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 000-1.414z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 14,
      category: 'Kỹ năng',
      title: 'Luyện nói trước gương',
      description: 'Tập nói trước gương 10 phút mỗi ngày để cải thiện kỹ năng giao tiếp và tự tin.',
      participants: '1,234 người tham gia',
      participantsCount: 1234,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 15,
      category: 'Kỹ năng',
      title: 'Học vẽ cơ bản',
      description: 'Dành 20 phút mỗi ngày để học và thực hành các kỹ thuật vẽ cơ bản.',
      participants: '1,123 người tham gia',
      participantsCount: 1123,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
        </svg>
      )
    },
    {
      id: 16,
      category: 'Kỹ năng',
      title: 'Luyện gõ 10 ngón',
      description: 'Thực hành gõ 10 ngón mỗi ngày để tăng tốc độ và hiệu quả khi làm việc với máy tính.',
      participants: '987 người tham gia',
      participantsCount: 987,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 17,
      category: 'Kỹ năng',
      title: 'Học chụp ảnh',
      description: 'Học và thực hành các kỹ thuật chụp ảnh cơ bản để cải thiện khả năng sáng tạo.',
      participants: '876 người tham gia',
      participantsCount: 876,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 18,
      category: 'Kỹ năng',
      title: 'Luyện nói tiếng Anh',
      description: 'Dành 15 phút mỗi ngày để luyện nói tiếng Anh, cải thiện phát âm và từ vựng.',
      participants: '765 người tham gia',
      participantsCount: 765,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 19,
      category: 'Kỹ năng',
      title: 'Học chơi một nhạc cụ',
      description: 'Dành 20 phút mỗi ngày để học và thực hành chơi một nhạc cụ bạn yêu thích.',
      participants: '654 người tham gia',
      participantsCount: 654,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
        </svg>
      )
    },
    {
      id: 20,
      category: 'Kỹ năng',
      title: 'Học nấu ăn',
      description: 'Học nấu một món ăn mới mỗi tuần để phát triển kỹ năng nấu nướng và sáng tạo.',
      participants: '543 người tham gia',
      participantsCount: 543,
      duration: '30 ngày',
      color: 'secondary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-1.5-3H10a.5.5 0 0 1 0-1h3.5a.5.5 0 0 1 .4.2l1.5 3a.5.5 0 0 1-.4.8H2a.5.5 0 0 1-.4-.8l1.5-3zM1 11a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.5a.5.5 0 0 1-1 0V11H2v.5a.5.5 0 0 1-1 0V11zm14-4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 1 0V7h12V4.5a.5.5 0 0 1 1 0V7z" clipRule="evenodd"></path>
        </svg>
      )
    },
    
    // Tinh thần category - 10 cards
    {
      id: 21,
      category: 'Tinh thần',
      title: 'Thiền 10 phút',
      description: 'Dành 10 phút mỗi ngày để thiền, giảm căng thẳng và cải thiện sức khỏe tinh thần.',
      participants: '1,456 người tham gia',
      participantsCount: 1456,
      duration: '30 ngày',
      color: 'blue-500',
      bgColor: 'blue-100',
      textColor: 'blue-500',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      )
    },
    {
      id: 22,
      category: 'Tinh thần',
      title: 'Ghi nhật ký biết ơn',
      description: 'Mỗi ngày ghi lại 3 điều bạn biết ơn để nuôi dưỡng lòng biết ơn và tích cực.',
      participants: '1,345 người tham gia',
      participantsCount: 1345,
      duration: '30 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 23,
      category: 'Tinh thần',
      title: 'Thực hành chánh niệm',
      description: 'Dành thời gian mỗi ngày để thực hành chánh niệm, tập trung vào hiện tại.',
      participants: '987 người tham gia',
      participantsCount: 987,
      duration: '21 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l2.828 2.829a1 1 0 101.415-1.415L11.414 10l1.293 1.293a1 1 0 001.414 0z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 24,
      category: 'Tinh thần',
      title: 'Đọc sách phát triển bản thân',
      description: 'Đọc ít nhất 15 phút mỗi ngày từ sách phát triển bản thân để mở rộng tầm nhìn.',
      participants: '1,123 người tham gia',
      participantsCount: 1123,
      duration: '30 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
        </svg>
      )
    },
    {
      id: 25,
      category: 'Tinh thần',
      title: 'Hạn chế mạng xã hội',
      description: 'Giảm thời gian sử dụng mạng xã hội xuống còn 30 phút mỗi ngày để cải thiện sức khỏe tinh thần.',
      participants: '2,345 người tham gia',
      participantsCount: 2345,
      duration: '14 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path fill="currentColor" d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          <path fill="currentColor" d="M23 1L1 23" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 26,
      category: 'Tinh thần',
      title: 'Thực hành lòng tốt',
      description: 'Thực hiện một hành động tử tế mỗi ngày để lan tỏa tình yêu thương và tích cực.',
      participants: '1,678 người tham gia',
      participantsCount: 1678,
      duration: '30 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 27,
      category: 'Tinh thần',
      title: 'Yoga buổi sáng',
      description: 'Thực hành yoga 15 phút mỗi sáng để cân bằng tâm trí và cơ thể trước khi bắt đầu ngày mới.',
      participants: '1,432 người tham gia',
      participantsCount: 1432,
      duration: '21 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 28,
      category: 'Tinh thần',
      title: 'Ngắt kết nối điện tử',
      description: 'Dành 1 giờ mỗi ngày không sử dụng thiết bị điện tử để tái kết nối với thế giới thực.',
      participants: '876 người tham gia',
      participantsCount: 876,
      duration: '14 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 29,
      category: 'Tinh thần',
      title: 'Âm nhạc thư giãn',
      description: 'Lắng nghe nhạc thư giãn 15 phút mỗi ngày để giảm căng thẳng và cải thiện tâm trạng.',
      participants: '1,234 người tham gia',
      participantsCount: 1234,
      duration: '30 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
        </svg>
      )
    },
    {
      id: 30,
      category: 'Tinh thần',
      title: 'Viết lại ngày của bạn',
      description: 'Dành 10 phút mỗi tối để viết về ngày của bạn, giúp xử lý cảm xúc và rút ra bài học.',
      participants: '987 người tham gia',
      participantsCount: 987,
      duration: '30 ngày',
      color: 'tertiary',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
      )
    },
    
    //10 cards category Học Tập
    // Học tập category - 10 cards
    {
      id: 31,
      category: 'Học tập',
      title: 'Học từ mới mỗi ngày',
      description: 'Học 5 từ mới mỗi ngày và ôn tập từ đã học để cải thiện vốn từ vựng.',
      participants: '1,234 người tham gia',
      participantsCount: 1234,
      duration: '30 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 32,
      category: 'Học tập',
      title: 'Đọc sách tiếng Anh',
      description: 'Đọc ít nhất 10 trang sách tiếng Anh mỗi ngày để cải thiện kỹ năng đọc hiểu.',
      participants: '2,345 người tham gia',
      participantsCount: 2345,
      duration: '21 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
        </svg>
      )
    },
    {
      id: 33,
      category: 'Học tập',
      title: 'Luyện nghe tiếng Anh',
      description: 'Nghe podcast hoặc video tiếng Anh 15 phút mỗi ngày để cải thiện kỹ năng nghe.',
      participants: '1,567 người tham gia',
      participantsCount: 1567,
      duration: '14 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      )
    },
    {
      id: 34,
      category: 'Học tập',
      title: 'Luyện viết tiếng Anh',
      description: 'Viết nhật ký hoặc bài luận ngắn bằng tiếng Anh mỗi ngày.',
      participants: '1,890 người tham gia',
      participantsCount: 1890,
      duration: '30 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <path fill="currentColor" d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/>
        </svg> 
      )
    },
    {
      id: 35,
      category: 'Học tập',
      title: 'Học ngữ pháp',
      description: 'Học và thực hành một điểm ngữ pháp mới mỗi ngày.',
      participants: '1,234 người tham gia',
      participantsCount: 1234,
      duration: '21 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      id: 36,
      category: 'Học tập',
      title: 'Luyện phát âm',
      description: 'Luyện tập phát âm 10 phút mỗi ngày với các video hướng dẫn.',
      participants: '2,345 người tham gia',
      participantsCount: 2345,
      duration: '14 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
        </svg>
      )
    },
    {
      id: 37,
      category: 'Học tập',
      title: 'Thực hành giao tiếp',
      description: 'Tham gia các buổi trò chuyện tiếng Anh với người bản xứ.',
      participants: '1,567 người tham gia',
      participantsCount: 1567,
      duration: '30 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    },
    {
      id: 38,
      category: 'Học tập',
      title: 'Học từ vựng chuyên ngành',
      description: 'Học 3 từ vựng chuyên ngành mới mỗi ngày.',
      participants: '1,890 người tham gia',
      participantsCount: 1890,
      duration: '21 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
        </svg>
      )
    },
    {
      id: 39,
      category: 'Học tập',
      title: 'Luyện dịch',
      description: 'Dịch một đoạn văn ngắn từ tiếng Việt sang tiếng Anh mỗi ngày.',
      participants: '1,234 người tham gia',
      participantsCount: 1234,
      duration: '14 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"></path>
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
        </svg>
      )
    },
    {
      id: 40,
      category: 'Học tập',
      title: 'Luyện thi chứng chỉ',
      description: 'Luyện tập các bài thi mẫu cho chứng chỉ tiếng Anh quốc tế.',
      participants: '2,345 người tham gia',
      participantsCount: 2345,
      duration: '30 ngày',
      color: 'accent',
      icon: (
        <svg className="w-16 h-16 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <path fill="currentColor" d="M15 4C8.925 4 4 8.925 4 15s4.925 11 11 11 11-4.925 11-11S21.075 4 15 4zm0 2c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9zm0 2c-.552 0-1 .448-1 1v5.5c0 .27.11.515.287.692l3.5 3.5c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L16 14.086V9c0-.552-.448-1-1-1z"/>
        </svg>      
      )
    } 
]; 