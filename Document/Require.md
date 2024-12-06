Instructions to the candidate for the home task
Create a simple application related to incident management The application will list all
existing incidents. and users can adcl delete and modify incidents. User login feature isnt
a necessity. You should complete this task independently and are free to use any resources
or reference materials you deem appropriate. The completed work should be submitted via
email or public Giff-lub no more than 48 hours after receiving this assignment. The
exercise is intended to take 1 to 2 hours to complete. upon review of the submission, a
follow-up diScussion will be arranged.

Instructions
Write in Java 17 and Spring Boot
The primary entity is the incident
All data should be held in memory; no persistence storage is necessary
The main points to address are:
1. Clear API
2. Performance of all the main operations
3. Thorough testing (includes unit testing and stress testing)
4. Competeness of the application (if possible, including the creation of a front-
end page using React)
5. use of containers, such as Docker, Kds
6. Mechanism of caching
7. Validation and Exception Handling
8. Efficient data queries, including ttE use of database technology (spring data,
SOL, pagination, indexing)
9. use Of RESTful style

* The deliverable should be a self-contained project that we can easily run and test
* Use Maven
* If you use extemal libraries outside of the standard JDK. please mention them in
the README and explain their purpose
* Ensure the page has the basic functionalities: adding{modifying/deleting incidents
and displaying the incident list on the page

API to implement
Feel free to name your functions as you see fit. as long as the action is clearly stated,
1. Create incident
2. Delete incident
3. Modify incldent
4. List all incidents
5. If errors Occur (for example, creating an existing incident or deleting a non-existent
incident), appropriate error handling should be in place, and error messages should
be comrnunicated
6. Uniy testing the API to ensure robustness and stability
INTERNAL
7. In case of necessity like-authorities etc, , test the corresponding handling logc
8. Ensure API's performance to withstand possble stress tests,

### 给候选人的家庭作业说明
**任务**  
创建一个与事故管理相关的简单应用程序。应用程序需要列出所有现有事故，用户可以新增、删除和修改事故。用户登录功能不是必须的。您应独立完成此任务，可以自由使用任何参考资料或资源。完成后的作品需要在收到任务后的 **48小时内** 通过电子邮件或公共 GitHub 提交。任务预计需要 **1-2小时** 完成，提交后将安排后续讨论。

---

### **具体要求**
**使用技术：**
1. 使用 **Java 17** 和 **Spring Boot**。
2. 数据以**内存**存储，不需要持久化存储。

**主要要求：**
1. 提供清晰的 **API**。
2. 关注主要操作的性能。
3. 测试全面，包括单元测试和压力测试。
4. 应用程序功能完整（如果可能，包括使用 **React** 创建前端页面）。
5. 使用容器技术，如 **Docker** 或 **Kubernetes (K8s)**。
6. 实现**缓存机制**。
7. 数据验证和异常处理。
8. 数据查询高效，包含分页、索引等数据库技术（如 **Spring Data** 和 SQL）。
9. 遵循 **RESTful** 风格设计。

**交付物：**
1. 应为一个易于运行和测试的**独立项目**。
2. 使用 **Maven** 构建项目。
3. 如果使用了标准 JDK 之外的库，请在 README 中说明，并解释其用途。
4. 前端页面应具备以下基本功能：
   - 新增事故
   - 修改事故
   - 删除事故
   - 显示事故列表

---

### **API 功能实现**
实现以下功能，函数命名应清晰且与操作意图一致：
1. **新增事故**  
2. **删除事故**  
3. **修改事故**  
4. **列出所有事故**  
5. 错误处理：如新增已存在的事故或删除不存在的事故时，提供适当的错误处理和错误消息反馈。
6. 针对 API 进行单元测试，确保其健壮性和稳定性。
7. 根据必要性处理权限相关逻辑。
8. 确保 API 性能能够承受压力测试。

**补充：**  
- **文档要求**：在 README 文件中详细说明实现和使用方法。  
- **项目运行**：确保提交的项目可以轻松启动和运行，具备完整的测试覆盖率。
 mkdir Incident-Management-Frontend
