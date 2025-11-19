import { StructureBuilder } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Bảng điều khiển quản trị")
    .items([
      // Course Content
      S.listItem()
        .title("Quản lý khóa học")
        .child(
          S.documentTypeList("course")
            .title("Khóa học")
            .child((courseId) =>
              S.list()
                .title("Tùy chọn khóa học")
                .items([
                  // Option to edit course content
                  S.listItem()
                    .title("Chỉnh sửa nội dung khóa học")
                    .child(
                      S.document().schemaType("course").documentId(courseId)
                    ),
                  // Option to view course enrollments
                  S.listItem()
                    .title("Xem học viên")
                    .child(
                      S.documentList()
                        .title("Học viên đã đăng ký")
                        .filter(
                          '_type == "enrollment" && course._ref == $courseId'
                        )
                        .params({ courseId })
                    ),
                ])
            )
        ),

      S.divider(),

      // Users
      S.listItem()
        .title("Quản lý người dùng")
        .child(
          S.list()
            .title("Chọn loại người dùng")
            .items([
              // Instructors with options
              S.listItem()
                .title("Giảng viên")
                .schemaType("instructor")
                .child(
                  S.documentTypeList("instructor")
                    .title("Giảng viên")
                    .child((instructorId) =>
                      S.list()
                        .title("Tùy chọn giảng viên")
                        .items([
                          // Option to edit instructor details
                          S.listItem()
                            .title("Chỉnh sửa thông tin giảng viên")
                            .child(
                              S.document()
                                .schemaType("instructor")
                                .documentId(instructorId)
                            ),
                          // Option to view instructor's courses
                          S.listItem()
                            .title("Thông tin khóa học")
                            .child(
                              S.documentList()
                                .title("Instructor's Courses")
                                .filter(
                                  '_type == "course" && instructor._ref == $instructorId'
                                )
                                .params({ instructorId })
                            ),
                        ])
                    )
                ),
              // Students with options
              S.listItem()
                .title("Học sinh")
                .schemaType("student")
                .child(
                  S.documentTypeList("student")
                    .title("Học sinh")
                    .child((studentId) =>
                      S.list()
                        .title("Tùy chọn học sinh")
                        .items([
                          // Option to edit student details
                          S.listItem()
                            .title("Chỉnh sửa thông tin học sinh")
                            .child(
                              S.document()
                                .schemaType("student")
                                .documentId(studentId)
                            ),
                          // Option to view enrollments
                          S.listItem()
                            .title("Khóa học đã đăng ký")
                            .child(
                              S.documentList()
                                .title("Khóa học đã đăng ký")
                                .filter(
                                  '_type == "enrollment" && student._ref == $studentId'
                                )
                                .params({ studentId })
                            ),
                        ])
                    )
                ),
            ])
        ),

      S.divider(),
    ]);
