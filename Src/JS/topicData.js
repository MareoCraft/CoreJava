const topicsData = [

  // ================================================================
  // PAGE 1-5: INTRODUCTION & BASICS
  // ================================================================

  {
    id: 'what-is-language',
    title: 'What is a Language?',
    icon: 'fas fa-language',
    category: 'Introduction',
    content: `
      <h2>What is a Language?</h2>
      <p>A language is a <strong>medium of communication</strong> through which we can express our thoughts and ideas and communicate with others.</p>
      <p><strong>Example:</strong> English, Telugu, Hindi, French, etc.</p>

      <h2>What is Programming Language?</h2>
      <p>A programming language is a <strong>medium of communication between a programmer and a computer</strong>. It allows programmers to write instructions that a computer can understand and execute.</p>
      <p><strong>Example:</strong> C, C++, Java, Python.</p>

      <h3>Characteristics of Java Language</h3>
      <p>It provides two characteristics:</p>
      <ul>
        <li><strong>a) Syntax:</strong> Rules provided by Java language</li>
        <li><strong>b) Semantics:</strong> Structure OR meaning of the code</li>
      </ul>

      <h3>Example:</h3>
      <p>For English Language Translation, We have grammar rule: Subject + Verb + Object</p>
      <ul>
        <li>He is a boy. (Valid)</li>
        <li>He is a box. (Invalid)</li>
      </ul>

      <p>Our java code will be verified using javac (Java Compiler) & Runtime Environment (JVM).</p>

      <h4>At Compilation Level:</h4>
      <p>Here Our Java compiler will verify the <strong>syntax</strong>. If the code is syntax wise correct then java compiler will compile the code and generate <strong>byte code</strong>. [Never say machine code]</p>

      <h4>At Runtime Level:</h4>
      <p>Here our Runtime Environment (JVM) will verify the <strong>semantics</strong> of the code that means the code is meaningful or not, If not, It will generate Runtime Error.</p>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Conclusion:</div>
          <p>We have <strong>two levels of security</strong> in Java.</p>
        </div>
      </div>
    `
  },

  {
    id: 'what-is-java',
    title: 'What is Java?',
    icon: 'fas fa-coffee',
    category: 'Introduction',
    content: `
      <h2>What is Java?</h2>
      <p>Java is <strong>High level, platform independent, secure, robust (strong), multi-threaded, Object Oriented</strong> programming language.</p>

      <h3>History of Java</h3>
      <ul>
        <li>Java was originally developed by <strong>Sun Microsystem</strong> in the year <strong>1991</strong> [OAK].</li>
        <li>Currently, Java is the product of <strong>Oracle Corporation</strong>.</li>
        <li>The first beta version of java was released in <strong>1995</strong> and first official version was released on <strong>23rd January 1996</strong>.</li>
      </ul>

      <h3>Applications of Java</h3>
      <p>Java is used to develop various types of applications:</p>
      <ol>
        <li>Desktop Applications (e.g., IDEs, tools)</li>
        <li>Web Applications</li>
        <li>Mobile Applications (Android)</li>
        <li>Enterprise Applications (banking, ERP, etc.)</li>
        <li>Gaming Applications</li>
        <li>Cloud-based and AI/ML Applications</li>
      </ol>

      <h3>Flavors of Java</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Flavor</th><th>Description</th></tr>
          <tr><td>Java SE</td><td>Java Standard Edition (Standalone/Desktop Apps)</td></tr>
          <tr><td>Java EE</td><td>Java Enterprise Edition (Web & Enterprise Apps)</td></tr>
          <tr><td>Java ME</td><td>Java Micro Edition (Mobile & Embedded Devices)</td></tr>
          <tr><td>Java FX</td><td>Rich Internet Applications (RIA)</td></tr>
          <tr><td>Java Card</td><td>Smart Cards</td></tr>
        </table>
      </div>

      <h3>Java Version History</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Version</th><th>Year</th></tr>
          <tr><td>JDK 1.0</td><td>1996</td></tr>
          <tr><td>JDK 1.1</td><td>1997</td></tr>
          <tr><td>J2SE 1.2</td><td>1998</td></tr>
          <tr><td>J2SE 1.3</td><td>2000</td></tr>
          <tr><td>J2SE 1.4</td><td>2002</td></tr>
          <tr><td>J2SE 5.0</td><td>2004</td></tr>
          <tr><td>Java SE 6</td><td>2006</td></tr>
          <tr><td>Java SE 7</td><td>2011</td></tr>
          <tr><td>Java SE 8</td><td>2014</td></tr>
          <tr><td>Java SE 9</td><td>2017</td></tr>
          <tr><td>Java SE 10</td><td>2018</td></tr>
          <tr><td>Java SE 11 (LTS)</td><td>2018</td></tr>
          <tr><td>Java SE 17 (LTS)</td><td>2021</td></tr>
          <tr><td>Java SE 21 (LTS)</td><td>2023</td></tr>
          <tr><td>Java 25 (LTS)</td><td>2025</td></tr>
        </table>
      </div>
    `
  },

  {
    id: 'platform-independence',
    title: 'Platform Independence',
    icon: 'fas fa-globe',
    category: 'Introduction',
    content: `
      <h2>What is Platform Independence in Java?</h2>
      <p>In C language, if we compile code on Windows 32-bit, we get Test.obj and Test.exe that can only run on that system. If there is a change in system configuration, we need to recompile.</p>

      <h3>How Java is Platform Independent?</h3>
      <p>Java is a platform independent language. Whenever we write a java program, the extension of java program must be <strong>.java</strong>.</p>
      <ol>
        <li>Now this java file we submit to java compiler (<code>javac</code>) for compilation process.</li>
        <li>After successful compilation the compiler will generate a very special <strong>byte code file i.e. .class file</strong> (also known as bytecode).</li>
        <li>Now this class file we submit to <strong>JVM</strong> for execution purpose.</li>
      </ol>

      <div class="code-block">
        <div class="code-header"><span class="code-filename">Process</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          Test.java (Source Code)
                  ↓
          javac (java compiler)
                  1) Syntax Verification
                  2) Compatibility issues
                  3) Will convert the source
                  ↓
          Test.class (Byte code)
                  ↓
          JVM (Java Virtual Machine)
                  ↓
          Execute the .class
        </code></pre>
      </div>

      <p>The role of JVM is to load and execute the class file. Here JVM plays a major role because it converts the class file into appropriate machine code instruction (Operating System format) so java becomes platform independent language and it is highly suitable for website development.</p>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>Each OS (Windows, Linux, Mac) has its own JVM implementation that means <strong>JVM is platform dependent technology</strong> whereas <strong>Java is platform independent technology</strong>.</p>
        </div>
      </div>

      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Important:</div>
          <p>JVM internally contains an interpreter so it executes the code line by line. It is written in C language hence platform dependent.</p>
        </div>
      </div>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>All the browsers internally contain JVM are known as <strong>JEB (Java Enabled Browsers)</strong> browser.</p>
        </div>
      </div>

      <h3>Byte Code</h3>
      <p>Byte code internally contains 8 bits format. 8 bit = 1 byte so, It is known as byte code.</p>
    `
  },

  {
    id: 'jdk-jre-jvm',
    title: 'JDK, JRE, JVM & JIT',
    icon: 'fas fa-cogs',
    category: 'Introduction',
    content: `
      <h2>What is the difference between JDK, JRE, JVM and JIT compiler?</h2>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Relationship:</div>
          <p>JDK ⊃ JRE ⊃ JVM (JDK contains JRE contains JVM)</p>
        </div>
      </div>

      <h3>JVM (Java Virtual Machine)</h3>
      <ul>
        <li>It stands for Java Virtual Machine.</li>
        <li>It is used to load and execute our .class file in line by line [Internally It contains an Interpreter].</li>
        <li>JVM is used to convert our .class file into appropriate machine code instruction.</li>
        <li>It provides following features:
          <ul>
            <li>Loading the .class file</li>
            <li>To verify the .class file [ByteCodeVerifier]</li>
            <li>Allocate the memory for the members of the class</li>
            <li>Delete the un-used objects by Garbage Collector</li>
            <li>Provides Security</li>
            <li>Manage the memory and so on</li>
          </ul>
        </li>
      </ul>

      <h3>JRE (Java Runtime Environment)</h3>
      <ul>
        <li>Contains JVM + libraries needed to run Java applications.</li>
        <li>If we want to <strong>run</strong> Java programs, we need JRE.</li>
      </ul>

      <h3>JDK (Java Development Kit)</h3>
      <ul>
        <li>Contains JRE + development tools like javac (compiler), jar, javadoc etc.</li>
        <li>If we want to <strong>develop</strong> Java programs, we need JDK.</li>
      </ul>

      <h3>JIT (Just-In-Time Compiler)</h3>
      <ul>
        <li>JIT Compiler is a part of the JVM execution engine.</li>
        <li>It is used to enhance the performance of Java programs.</li>
        <li>Internally JVM uses an interpreter, which executes bytecode line by line hence execution is slow. To overcome this limitation, JVM uses JIT Compiler.</li>
      </ul>

      <h4>How JIT Compiler Works:</h4>
      <p>When the JVM finds some methods or instructions that are repeated frequently (called <strong>hotspots</strong>), Instead of interpreting them line by line again and again, JIT compiles those bytecode instructions into <strong>native machine code</strong>. At the time of execution, JIT compiler directly provides these native machine code to JVM Interpreter for fast execution.</p>

      <h3>Compiler vs Interpreter</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Feature</th><th>Compiler</th><th>Interpreter</th></tr>
          <tr><td>Scanning</td><td>Will scan the entire program</td><td>Will scan line by line</td></tr>
          <tr><td>Errors</td><td>Will display all the warnings and errors at a time</td><td>Will display the errors line by line</td></tr>
          <tr><td>Output</td><td>Will convert S/C into byte code so separate memory is required to hold the byte code</td><td>No separate memory is required</td></tr>
          <tr><td>Debugging</td><td>Debugging is slow</td><td>Debugging is fast</td></tr>
          <tr><td>Execution</td><td>After resolving all errors, execution is fast</td><td>Execution is slow</td></tr>
          <tr><td>Source Code</td><td>After compilation, we can delete the S/C</td><td>Cannot delete the S/C</td></tr>
        </table>
      </div>
    `
  },

  {
    id: 'data-types',
    title: 'Data Types',
    icon: 'fas fa-database',
    category: 'Core Java Basics',
    content: `
      <h2>What is Data Type in Java?</h2>
      <p>It defines the type of data that a variable can store. It also describes:</p>
      <ul>
        <li><strong>a) Size:</strong> How much memory it occupies in RAM.</li>
        <li><strong>b) Range:</strong> What values it can hold (e.g., byte → -128 to 127).</li>
        <li><strong>c) Operations:</strong> What kind of operations can be performed (e.g., addition for numbers, concatenation for String).</li>
      </ul>

      <h2>How Many Data Types in Java?</h2>
      <p>Java data types are mainly divided into two categories:</p>
      <ol>
        <li>Primitive Data type (Predefined / Primary / Fundamental)</li>
        <li>Reference Data type [Don't say non-primitive data type]</li>
      </ol>

      <h3>Primitive Data Types</h3>
      <p>We have total <strong>8 primitive data types</strong>.</p>
      <div class="table-responsive">
        <table>
          <tr><th>Type</th><th>Size</th><th>Range</th></tr>
          <tr><td>byte</td><td>8 bits</td><td>-128 to 127</td></tr>
          <tr><td>short</td><td>16 bits</td><td>-32,768 to 32,767</td></tr>
          <tr><td>int</td><td>32 bits</td><td>~−2.15e9 to 2.15e9**</td></tr>
          <tr><td>long</td><td>64 bits</td><td>	~−9.22e18 to 9.22e18</td></tr>
          <tr><td>float</td><td>32 bits</td><td>~3.4e-38 to 3.4e+38</td></tr>
          <tr><td>double</td><td>64 bits</td><td>~1.7e-308 to 1.7e+308</td></tr>
          <tr><td>char</td><td>16 bits</td><td>0 to 65,535 (Unicode)</td></tr>
          <tr><td>boolean</td><td>1 bit (depends)</td><td>true or false</td></tr>
        </table>
      </div>

      <p><strong>Note:</strong> Out of 8, 6 data types i.e. byte, short, int, long, float and double represents number data types.</p>

      <h3>Reference Data Types</h3>
      <p>Example: class, array, interface, enum, record and so on.</p>

      <h3>Statically Typed vs Dynamically Typed Language</h3>
      <p><strong>Statically typed language:</strong> The languages where data type is compulsory before initialization of a variable are called Statically typed language. In these languages, once we define the type of the variable then it will hold same kind of value till the end of the program.</p>
      <p><strong>Example:</strong> C, C++, JSE, C# and so on</p>
      <p><strong>Dynamically typed language:</strong> The languages where Data type is not compulsory, it is optional to initialize the variable are called Dynamically Typed Language. In these languages we can provide all different kinds of values to the variable during the execution of the program.</p>
      <p><strong>Example:</strong> Visual Basic, JavaScript, Python and so on</p>
    `
  },

  // ================================================================
  // COMMENTS (Detailed)
  // ================================================================
  {
    id: 'comments',
    title: 'Comments',
    icon: 'fas fa-comment',
    category: 'Core Java Basics',
    content: `
      <h2>What is Comment in Java?</h2>
      <p>Comments are used to enhance the <strong>readability of the code</strong>. It is ignored by the Compiler.</p>
      <p>In java, we have <strong>3 types of comments</strong>:</p>
      <ol>
        <li><strong>Single Line Comment:</strong> <br> <code>// This is single line comment</code></li>
        <li><strong>Multi-line Comment:</strong> <br> <code>/* This is multiline comment */</code></li>
        <li><strong>Documentation Comment:</strong> <br> <code>/** This is documentation comment */</code></li>
      </ol>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Comments.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// Single line comment</span>
          
          <span class="hl-comment">/*
              Multiline comment
              This can span multiple lines
          */</span>
          
          <span class="hl-comment">/**
              Documentation comment
              Name of the Project : Online Shopping
              Number of Modules    : 3
              Module Name         : Admin, Customer
              Project Date        : 12th March 2024
              Last Modified       : 2nd December 2024
              Author              : James Gosling and his friends
          */</span>
        </code></pre>
      </div>
    `
  },

  {
    id: 'naming-conventions',
    title: 'Naming Conventions',
    icon: 'fas fa-pen',
    category: 'Core Java Basics',
    content: `
      <h2>Naming Convention OR Coding Standard in Java</h2>
      <p>Naming convention provides two important characteristics:</p>
      <ul>
        <li>a) Standard Code (Industry accepted code)</li>
        <li>b) Readability of the code will enhance.</li>
      </ul>
      <h3>1) How to write a class in Java?</h3>
      <p>While writing a class in java, we should follow <strong>Pascal naming convention</strong>. According to this word, first character of every word should be in <strong>upper case</strong>. Also, we need to follow <strong>upper case</strong> for the first character and remaining words in lower case. It doesn't contain any symbol.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ClassNames.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Test</span> { }
          <span class="hl-keyword">class</span> <span class="hl-type">Example</span> { }
          <span class="hl-keyword">class</span> <span class="hl-type">ExampleOfClass</span> { }
          <span class="hl-keyword">class</span> <span class="hl-type">ArrayIndexOutOfBoundsException</span> { }
          <span class="hl-keyword">class</span> <span class="hl-type">DataInputStream</span> { }
        </code></pre>
      </div>
      <h3>2) How to write a method in Java?</h3>
      <p>While writing a method in java we should follow <strong>camel case naming convention</strong>. According to this naming convention, the first character should be in <strong>lower case</strong> and the remaining words should be in <strong>upper case</strong> only and there should not be any symbol.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MethodNames.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">test</span>() { }
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">exampleOfMethod</span>() { }
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">readLine</span>() { }
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">charAt</span>() { }
        </code></pre>
      </div>
      <h3>3) How to write a Variable/Field in Java?</h3>
      <p>While writing a variable/field we should follow <strong>camel case naming convention</strong> but unlike method variable doesn't have () symbol.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">VariableNames.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span> rollNumber;
          <span class="hl-type">double</span> customerName;
          <span class="hl-type">int</span> customerId;
          String playerName;
        </code></pre>
      </div>
      <h3>4) How to write a final and static field?</h3>
      <p>While writing the final and static field we should follow <strong>snake_case naming convention</strong>. Each character must be in <strong>upper case</strong>, each words separated by underscore and between two words we must have <strong>_</strong> symbol.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ConstantNames.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">static</span> <span class="hl-keyword">final</span> <span class="hl-type">int</span> MAX_VALUE = <span class="hl-number">100</span>;
          <span class="hl-keyword">static</span> <span class="hl-keyword">final</span> <span class="hl-type">int</span> MIN_VALUE = <span class="hl-number">1</span>;
          <span class="hl-keyword">static</span> <span class="hl-keyword">final</span> <span class="hl-type">int</span> MAXVALUE = <span class="hl-number">100</span>; <span class="hl-comment">// Invalid</span>
        </code></pre>
      </div>
      <h3>5) How to write a package</h3>
      <p>Package must be written in <strong>lower case only</strong>. Generally, it is reverse of company name.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Packages</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          com.tcs
          com.tcs.training
          com.wipro.online.shopping
        </code></pre>
      </div>
    `
  },

  {
    id: 'main-method',
    title: 'Main Method',
    icon: 'fas fa-bullseye',
    category: 'Core Java Basics',
    content: `
      <h2>How to write a Java Program to display welcome message?</h2>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Welcome.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Welcome</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"Welcome to Java Language"</span>);
              }
          }
          <span class="hl-comment">// Output: Welcome to Java Language</span>
        </code></pre>
      </div>
      <h3>Flow of Execution</h3>
      <ol>
        <li>Here JVM will load the <strong>Welcome.class</strong> file.</li>
        <li>After loading, the execution will start. In Java the execution of the program will always starts from <strong>main method</strong> only.</li>
      </ol>
      <h3>Description of main method:</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MainMethod.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Welcome to Java"</span>);
          }
          <span class="hl-comment">// void is a keyword in java</span>
          <span class="hl-comment">// If we want to write "user-defined method", if we don't want to return any kind of value from that particular method.</span>
          <span class="hl-comment">// When we write void then we don't have any "communication" from one module to another module.</span>
        </code></pre>
      </div>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>Main method is user-defined method because a user is responsible to write the logic inside the method, only the name is predefined because it is the entry point of our java program.</p>
        </div>
      </div>
    `
  },
  // ================================================================
  // BASIC TYPES OF METHODS IN JAVA (Static, Non-Static, Predefined, User-Defined)
  // ================================================================
  {
    id: 'basic-types-of-methods',
    title: 'Basic Types of Methods in Java',
    icon: 'fas fa-tools',
    category: 'Core Java Basics',
    content: `
      <h2>Basic Types of Methods in Java</h2>
      <p>In Java, methods are classified into different types based on <strong>who provides the implementation</strong> and <strong>whether an object is required to call them</strong>.</p>

      <h3>1. Classification Based on Definition (Who Wrote the Method)</h3>
      <ul>
        <li><strong>Predefined / Built-in Methods:</strong> Developed by Java creators (e.g., <code>System.out.println()</code>, <code>Math.max()</code>, <code>String.length()</code>).</li>
        <li><strong>User-Defined / Custom Methods:</strong> Written by the developer/application programmer based on business requirements.</li>
      </ul>

      <div class="code-block">
        <div class="code-header"><span class="code-filename">PredefinedVsUser.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// Predefined Method</span>
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"Hello"</span>);   <span class="hl-comment">// println() is predefined</span>
          <span class="hl-type">double</span> sq = <span class="hl-type">Math</span>.<span class="hl-method">sqrt</span>(<span class="hl-number">25</span>); <span class="hl-comment">// sqrt() is predefined</span>

          <span class="hl-comment">// User-Defined Method</span>
          <span class="hl-type">int</span> result = <span class="hl-method">addNumbers</span>(<span class="hl-number">10</span>, <span class="hl-number">20</span>);
        </code></pre>
      </div>

      <h3>2. Classification Based on Static Modifier (Object Required or Not)</h3>
      <ul>
        <li><strong>Static Methods (Class Methods):</strong> Declared with <code>static</code> keyword. No object required to call; called using class name.</li>
        <li><strong>Non-Static Methods (Instance Methods):</strong> NOT declared with <code>static</code> keyword. Object is required to call.</li>
      </ul>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Important:</div>
          <p>Static methods belong to the class, while non-static methods belong to the objects of the class. Static methods are loaded into memory when the class is loaded, whereas non-static methods are loaded when the object is created.</p>
        </div>
      </div>

      <h3>Example: Static vs Non-Static Method</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MethodTypes.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Calculator</span> {
              <span class="hl-comment">// Static Method</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-type">int</span> <span class="hl-method">addStatic</span>(<span class="hl-type">int</span> a, <span class="hl-type">int</span> b) {
                  <span class="hl-keyword">return</span> a + b;
              }

              <span class="hl-comment">// Non-Static Method</span>
              <span class="hl-keyword">public</span> <span class="hl-type">int</span> <span class="hl-method">multiplyNonStatic</span>(<span class="hl-type">int</span> a, <span class="hl-type">int</span> b) {
                  <span class="hl-keyword">return</span> a * b;
              }
          }

          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-comment">// Calling Static Method (using class name)</span>
              <span class="hl-type">int</span> sum = <span class="hl-type">Calculator</span>.<span class="hl-method">addStatic</span>(<span class="hl-number">10</span>, <span class="hl-number">20</span>);
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Static Sum: "</span> + sum);

              <span class="hl-comment">// Calling Non-Static Method (using object)</span>
              <span class="hl-type">Calculator</span> calc = <span class="hl-keyword">new</span> <span class="hl-type">Calculator</span>();
              <span class="hl-type">int</span> product = calc.<span class="hl-method">multiplyNonStatic</span>(<span class="hl-number">10</span>, <span class="hl-number">20</span>);
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Non-Static Product: "</span> + product);
          }
        </code></pre>
      </div>

      <h3>3. Types of User-Defined Methods (Based on Return Type & Parameters)</h3>
        <div class="method-types"> <!-- 1 -->
          <article class="method-card">
            <div class="method-content">
              <h3>No Parameter & No Return Type</h3>
              <div class="method-details">
                <div class="detail-item"> <span class="detail-label">Parameters</span> <span class="detail-value">No</span>
                </div>
                <div class="detail-item"> <span class="detail-label">Return Type</span> <span
                    class="detail-value">void</span> </div>
              </div>
              <div class="example-box"> <span class="example-label">Example</span> <code>void display() { ... }</code>
              </div>
            </div>
          </article> <!-- 2 -->
          <article class="method-card">
            <div class="method-content">
              <h3>No Parameter & With Return Type</h3>
              <div class="method-details">
                <div class="detail-item"> <span class="detail-label">Parameters</span> <span class="detail-value">No</span>
                </div>
                <div class="detail-item"> <span class="detail-label">Return Type</span> <span class="detail-value">Yes —
                    int, String, etc.</span> </div>
              </div>
              <div class="example-box"> <span class="example-label">Example</span>
                <code>int getValue() { return 10; }</code> </div>
            </div>
          </article> <!-- 3 -->
          <article class="method-card">
            <div class="method-content">
              <h3>With Parameter & No Return Type</h3>
              <div class="method-details">
                <div class="detail-item"> <span class="detail-label">Parameters</span> <span class="detail-value">Yes</span>
                </div>
                <div class="detail-item"> <span class="detail-label">Return Type</span> <span
                    class="detail-value">void</span> </div>
              </div>
              <div class="example-box"> <span class="example-label">Example</span> <code>void setValue(int x) { ... }</code>
              </div>
            </div>
          </article> <!-- 4 -->
          <article class="method-card">
            <div class="method-content">
              <h3>With Parameter & With Return Type</h3>
              <div class="method-details">
                <div class="detail-item"> <span class="detail-label">Parameters</span> <span class="detail-value">Yes</span>
                </div>
                <div class="detail-item"> <span class="detail-label">Return Type</span> <span
                    class="detail-value">Yes</span> </div>
              </div>
              <div class="example-box"> <span class="example-label">Example</span>
                <code>int add(int a, int b) { return a + b; }</code> </div>
            </div>
          </article>
      </div>

      <h3>4. Access Modifiers on Methods</h3>
      <ul>
        <li><strong>public:</strong> Accessible from anywhere.</li>
        <li><strong>private:</strong> Accessible only within the same class.</li>
        <li><strong>protected:</strong> Accessible within same package + subclasses.</li>
        <li><strong>default (no modifier):</strong> Accessible within same package only.</li>
      </ul>

      <h3>5. Special Methods</h3>
      <ul>
        <li><strong>Main Method:</strong> Entry point of Java application. <code>public static void main(String[] args)</code></li>
        <li><strong>Constructor:</strong> Special method with same name as class, used to initialize objects.</li>
        <li><strong>Finalizer (deprecated):</strong> Called before garbage collection.</li>
        <li><strong>Abstract Method:</strong> Method without body, must be overridden in subclasses.</li>
      </ul>
    `
  },
  // ================================================================
  // TOKENS IN JAVA (Main Heading - Complete Detail)
  // ================================================================
  {
    id: 'tokens-in-java',
    title: 'Tokens in Java',
    icon: 'fas fa-code',
    category: 'Core Java Basics',
    content: `
      <h2>What are Tokens in Java?</h2>
      <p>A <strong>token</strong> is the smallest individual element or unit of a Java program. The Java compiler breaks the source code into tokens and then processes them.</p>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Important:</div>
          <p>Java programs are made up of tokens. The compiler identifies these tokens and uses them to build the syntax tree.</p>
        </div>
      </div>

      <h3>Types of Tokens in Java</h3>
      <p>Java has <strong>5 types of tokens</strong>:</p>
      <ol>
        <li><strong>Keywords</strong></li>
        <li><strong>Identifiers</strong></li>
        <li><strong>Literals</strong></li>
        <li><strong>Operators</strong></li>
        <li><strong>Separators</strong></li>
      </ol>

      <h3>1. Keywords</h3>
      <p>Keywords are reserved words in Java with predefined meaning. They cannot be used as identifiers (variable names, class names, method names).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Keywords</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">abstract</span>      <span class="hl-keyword">assert</span>       <span class="hl-keyword">boolean</span>      <span class="hl-keyword">break</span>        <span class="hl-keyword">byte</span>
          <span class="hl-keyword">case</span>          <span class="hl-keyword">catch</span>       <span class="hl-keyword">char</span>         <span class="hl-keyword">class</span>       <span class="hl-keyword">const</span>
          <span class="hl-keyword">continue</span>      <span class="hl-keyword">default</span>     <span class="hl-keyword">do</span>           <span class="hl-keyword">double</span>      <span class="hl-keyword">else</span>
          <span class="hl-keyword">enum</span>          <span class="hl-keyword">extends</span>     <span class="hl-keyword">final</span>        <span class="hl-keyword">finally</span>     <span class="hl-keyword">float</span>
          <span class="hl-keyword">for</span>           <span class="hl-keyword">goto</span>        <span class="hl-keyword">if</span>           <span class="hl-keyword">implements</span>  <span class="hl-keyword">import</span>
          <span class="hl-keyword">instanceof</span>    <span class="hl-keyword">int</span>         <span class="hl-keyword">interface</span>   <span class="hl-keyword">long</span>        <span class="hl-keyword">native</span>
          <span class="hl-keyword">new</span>           <span class="hl-keyword">package</span>     <span class="hl-keyword">private</span>      <span class="hl-keyword">protected</span>   <span class="hl-keyword">public</span>
          <span class="hl-keyword">return</span>        <span class="hl-keyword">short</span>       <span class="hl-keyword">static</span>       <span class="hl-keyword">strictfp</span>    <span class="hl-keyword">super</span>
          <span class="hl-keyword">switch</span>        <span class="hl-keyword">synchronized</span> <span class="hl-keyword">this</span>      <span class="hl-keyword">throw</span>       <span class="hl-keyword">throws</span>
          <span class="hl-keyword">transient</span>     <span class="hl-keyword">try</span>         <span class="hl-keyword">void</span>         <span class="hl-keyword">volatile</span>    <span class="hl-keyword">while</span>
          <span class="hl-keyword">true</span>          <span class="hl-keyword">false</span>      <span class="hl-keyword">null</span>
        </code></pre>
      </div>
      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>Keywords are case-sensitive. For example, <code>class</code> is a keyword but <code>Class</code> is not.</p>
        </div>
      </div>

      <h3>2. Identifiers</h3>
      <p>Identifiers are names given to variables, classes, methods, interfaces, packages, and arrays.</p>
      <ul>
        <li>Must start with a letter (A-Z or a-z), $ (dollar sign), or _ (underscore).</li>
        <li>Cannot start with a digit.</li>
        <li>Cannot be a keyword.</li>
        <li>Are case-sensitive.</li>
        <li>Can be of any length.</li>
      </ul>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Identifiers</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span> studentAge;       <span class="hl-comment">// Valid</span>
          <span class="hl-type">int</span> $salary;          <span class="hl-comment">// Valid</span>
          <span class="hl-type">int</span> _name;            <span class="hl-comment">// Valid</span>
          <span class="hl-type">int</span> 123abc;           <span class="hl-comment">// Invalid (starts with digit)</span>
          <span class="hl-type">int</span> class;            <span class="hl-comment">// Invalid (keyword)</span>
        </code></pre>
      </div>

      <h3>3. Literals</h3>
      <p>Literals are fixed values assigned to variables. Java supports different types of literals:</p>
      <table>
        <tr><th>Type</th><th>Example</th></tr>
        <tr><td>Integer Literal</td><td>100, 0xFF, 0777, 0b1010</td></tr>
        <tr><td>Floating-Point Literal</td><td>10.5, 1e5, 3.14F</td></tr>
        <tr><td>Character Literal</td><td>'A', '\\n', '\\u0041'</td></tr>
        <tr><td>String Literal</td><td>"Hello Java"</td></tr>
        <tr><td>Boolean Literal</td><td>true, false</td></tr>
        <tr><td>Null Literal</td><td>null</td></tr>
      </table>

      <h3>4. Operators</h3>
      <p>Operators are symbols that perform operations on operands.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Operators</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// Arithmetic</span>
          <span class="hl-type">int</span> a = <span class="hl-number">10</span> + <span class="hl-number">20</span>;  <span class="hl-comment">// +</span>
          <span class="hl-type">int</span> b = a % <span class="hl-number">3</span>;      <span class="hl-comment">// %</span>
          
          <span class="hl-comment">// Relational</span>
          <span class="hl-keyword">if</span>(a &gt; b) { }
          
          <span class="hl-comment">// Logical</span>
          <span class="hl-keyword">if</span>(a &gt; <span class="hl-number">0</span> &amp;&amp; b &gt; <span class="hl-number">0</span>) { }
          
          <span class="hl-comment">// Assignment</span>
          a += <span class="hl-number">10</span>;
          
          <span class="hl-comment">// Ternary</span>
          <span class="hl-type">int</span> max = (a &gt; b) ? a : b;
        </code></pre>
      </div>

      <h3>5. Separators</h3>
      <p>Separators are symbols used to separate tokens in Java.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Separators</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          ()  <span class="hl-comment">// Parentheses - used for method calls and grouping</span>
          {}  <span class="hl-comment">// Braces - used for class/method bodies</span>
          []  <span class="hl-comment">// Brackets - used for arrays</span>
          ;   <span class="hl-comment">// Semicolon - terminates statements</span>
          ,   <span class="hl-comment">// Comma - separates variables/parameters</span>
          .   <span class="hl-comment">// Dot - used for package/class members</span>
        </code></pre>
      </div>

      <h3>Example: Tokens in a Java Program</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">TokenExample.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">TokenExample</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                  <span class="hl-type">int</span> x = <span class="hl-number">10</span>;
                  <span class="hl-type">System</span>.out.println(x);
              }
          }
          
          <span class="hl-comment">// Tokens:
          // Keywords: public, class, static, void, int
          // Identifiers: TokenExample, main, args, x, System, out, println
          // Literals: 10
          // Operators: =, ., + (if any)
          // Separators: {, }, (, ), ;, ,</span>
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // ALL LITERALS IN JAVA (Detailed with Programs)
  // ================================================================
  {
    id: 'literals-in-java',
    title: 'All Literals in Java',
    icon: 'fas fa-font',
    category: 'Core Java Basics',
    content: `
      <h2>What are Literals in Java?</h2>
      <p>A <strong>literal</strong> is a fixed value that is directly written in the source code. It represents a constant value assigned to a variable. In Java, literals are of various types depending on the data type they represent.</p>

      <h3>Types of Literals in Java</h3>
      <ol>
        <li><strong>Integer Literals</strong></li>
        <li><strong>Floating-Point Literals</strong></li>
        <li><strong>Character Literals</strong></li>
        <li><strong>String Literals</strong></li>
        <li><strong>Boolean Literals</strong></li>
        <li><strong>Null Literal</strong></li>
      </ol>

      <hr>

      <h3>1. Integer Literals</h3>
      <p>Integer literals represent whole numbers. They can be expressed in four number systems:</p>
      <ul>
        <li><strong>Decimal (Base 10):</strong> e.g., 100, 200, 5000</li>
        <li><strong>Octal (Base 8):</strong> Prefix with <code>0</code> (zero), e.g., 0777, 012</li>
        <li><strong>Hexadecimal (Base 16):</strong> Prefix with <code>0x</code> or <code>0X</code>, e.g., 0xFF, 0x1A</li>
        <li><strong>Binary (Base 2):</strong> Prefix with <code>0b</code> or <code>0B</code>, e.g., 0b1010, 0B1111</li>
      </ul>
      <p>By default, integer literals are of type <code>int</code>. We can use suffix <code>L</code> or <code>l</code> to make them <code>long</code>.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">IntegerLiteral.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span> decimal = <span class="hl-number">100</span>;
          <span class="hl-type">int</span> octal = <span class="hl-number">012</span>;        <span class="hl-comment">// decimal 10</span>
          <span class="hl-type">int</span> hex = <span class="hl-number">0xFF</span>;          <span class="hl-comment">// decimal 255</span>
          <span class="hl-type">int</span> binary = <span class="hl-number">0b1010</span>;      <span class="hl-comment">// decimal 10</span>
          
          <span class="hl-type">long</span> big = <span class="hl-number">10000000000L</span>;  <span class="hl-comment">// must use L suffix</span>
          
          <span class="hl-type">System</span>.out.println(decimal);  <span class="hl-comment">// 100</span>
          <span class="hl-type">System</span>.out.println(octal);    <span class="hl-comment">// 10</span>
          <span class="hl-type">System</span>.out.println(hex);      <span class="hl-comment">// 255</span>
          <span class="hl-type">System</span>.out.println(binary);   <span class="hl-comment">// 10</span>
        </code></pre>
      </div>

      <hr>

      <h3>2. Floating Point Literals</h3>
      <p>If a numeric literal contains decimal OR fraction then it is called Floating Point Literals.</p>
      <p><strong>Example:</strong> 12.90, 6.9, 0.1</p>
      <p>In floating point literals we have two data types:</p>
      <ul>
        <li>a) float (32 bits)</li>
        <li>b) double (64 bits)</li>
      </ul>
      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Important:</div>
          <p>By default, every floating point literal is of type <strong>double only</strong> so, if we write the following statement we will get compilation error:</p>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">FloatError.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">float</span> f = <span class="hl-number">0.0</span>;  <span class="hl-comment">// error</span>
          
          <span class="hl-comment">// Converting double to float:</span>
          <span class="hl-type">float</span> f1 = <span class="hl-number">0.0F</span>;
          <span class="hl-type">float</span> f2 = <span class="hl-number">0.0f</span>;
          <span class="hl-type">float</span> f3 = (<span class="hl-type">float</span>) <span class="hl-number">1.2</span>;
        </code></pre>
      </div>
      <p>Even though, all the floating point literals are by default of type <strong>double only</strong> but still Java compiler has provided two flavours to represent the double value explicitly to <strong>enhance the readability of the code</strong>.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">DoubleLiteral.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">double</span> d1 = <span class="hl-number">12D</span>;
          <span class="hl-type">double</span> d2 = <span class="hl-number">15d</span>;
        </code></pre>
      </div>
      <h3>Exponent Form</h3>
      <p>Floating point literals can represent in <strong>exponent form</strong>.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Exponent.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">double</span> d1 = <span class="hl-number">1</span>E<span class="hl-number">2</span>;  <span class="hl-comment">// 1 * 10^2 = 100.0</span>
          <span class="hl-type">double</span> d2 = <span class="hl-number">1</span>e<span class="hl-number">2</span>;   <span class="hl-comment">// 1 * 10^2 = 100.0</span>
          d1 = <span class="hl-number">1</span>E<span class="hl-number">5</span>;   <span class="hl-comment">// 100000.0</span>
          d1 = <span class="hl-number">5</span>E<span class="hl-number">-3</span>;  <span class="hl-comment">// 0.005</span>
          d2 = <span class="hl-number">0.01</span>E<span class="hl-number">2</span>; <span class="hl-comment">// 1.0</span>
        </code></pre>
      </div>
      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Important:</div>
          <p>Integral literal data type (byte, short, int and long) we can assign to floating point literal (float &amp; double) but floating point literal, we cannot assign directly to integer literal otherwise there is a chance of loss without explicit type casting.</p>
        </div>
      </div>

      <hr>

      <h3>3. Character Literal</h3>
      <p>It is also known as Char Literal. We have only <strong>one data type</strong> i.e. char data type which accepts 16 bits. [Supports UNICODE]</p>
      <p>So it takes 16 bits to memory.</p>
      <p>We can represent Character Literal in following ways:</p>

      <h4>1) Direct Character OR Special symbol</h4>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">CharLiteral.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">char</span> c1 = <span class="hl-string">'A'</span>;
          <span class="hl-type">char</span> c2 = <span class="hl-string">'@'</span>;
          <span class="hl-type">char</span> c3 = <span class="hl-string">'*'</span>;
          
          <span class="hl-comment">// Invalid</span>
          <span class="hl-type">char</span> ch = <span class="hl-string">'AB'</span>;  <span class="hl-comment">// Invalid (Empty String is not allowed)</span>
          String s = <span class="hl-string">""</span>;  <span class="hl-comment">// Valid</span>
          String s1 = <span class="hl-string">"A"</span>; <span class="hl-comment">// Valid</span>
        </code></pre>
      </div>

      <h4>2) In older languages like C and C++, it supports ASCII value format and range is 0 - 255.</h4>
      <p>On the other hand Java supports <strong>UNICODE</strong> format where the range is 0 - 65535. [Unsigned integer]</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">UnicodeChar.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">char</span> c1 = <span class="hl-number">65535</span>;  <span class="hl-comment">// Valid</span>
          <span class="hl-type">char</span> c2 = <span class="hl-number">65536</span>;  <span class="hl-comment">// Invalid</span>
        </code></pre>
      </div>

      <h4>3) We can assign character literal to int data type to know the Unicode value of that particular character.</h4>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">UnicodeValue.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span> x = <span class="hl-string">'A'</span>;
          <span class="hl-type">System</span>.out.println(x);  <span class="hl-comment">// 65</span>
        </code></pre>
      </div>

      <h4>4) We can also represent Character literal in 4-digit hexadecimal Unicode format</h4>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">HexUnicode.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">char</span> ch = <span class="hl-string">'\\uXXXX'</span>;
          
          <span class="hl-comment">// Here \\u represent : Unicode</span>
          <span class="hl-comment">// XXXX represents exactly 4 digits</span>
          <span class="hl-comment">// Range is : '\\u0000' to '\\uffff'</span>
          
          <span class="hl-comment">// Example: 97 is decimal number. If we want to represent in 4 digit hexadecimal format:</span>
          <span class="hl-comment">// 97 / 16 = 6 remainder 1</span>
          <span class="hl-comment">// 6 / 16 = 0 remainder 6</span>
          <span class="hl-comment">// So 97 in hex = 0061</span>
          <span class="hl-type">char</span> ch = <span class="hl-string">'\\u0061'</span>;  <span class="hl-comment">// represents 'a'</span>
        </code></pre>
      </div>

      <h4>5) Escape Sequences</h4>
      <p>All the escape sequences like (\\n, \\t) we can represent using character literal.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">EscapeChar.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">char</span> ch = <span class="hl-string">'\\n'</span>;  <span class="hl-comment">// newline</span>
          <span class="hl-type">char</span> ch = <span class="hl-string">'\\t'</span>;  <span class="hl-comment">// tab</span>
          <span class="hl-type">char</span> ch = <span class="hl-string">'\\b'</span>;  <span class="hl-comment">// backspace</span>
          <span class="hl-type">char</span> ch = <span class="hl-string">'\\r'</span>;  <span class="hl-comment">// carriage return</span>
          <span class="hl-type">char</span> ch = <span class="hl-string">'\\\\'</span>;  <span class="hl-comment">// backslash</span>
          <span class="hl-type">char</span> ch = <span class="hl-string">'\\''</span>;  <span class="hl-comment">// single quote</span>
        </code></pre>
      </div>

      <hr>

      <h3>4. String Literals</h3>
      <p>String literals are sequences of characters enclosed in double quotes. They are objects of the <code>String</code> class.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StringLiteral.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          String s1 = <span class="hl-string">"Hello Java"</span>;
          String s2 = <span class="hl-string">"123"</span>;        <span class="hl-comment">// string, not integer</span>
          String s3 = <span class="hl-string">"A"</span>;          <span class="hl-comment">// string, not char</span>
          String s4 = <span class="hl-string">""</span>;           <span class="hl-comment">// empty string</span>
          
          <span class="hl-type">System</span>.out.println(s1);
          <span class="hl-type">System</span>.out.println(s2);
        </code></pre>
      </div>

      <hr>

      <h3>5. Boolean Literals</h3>
      <p>Boolean literals represent <code>true</code> or <code>false</code> values. They are the only two boolean literals.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">BooleanLiteral.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">boolean</span> b1 = <span class="hl-keyword">true</span>;
          <span class="hl-keyword">boolean</span> b2 = <span class="hl-keyword">false</span>;
          
          <span class="hl-keyword">if</span>(b1) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"b1 is true"</span>);
          }
          <span class="hl-comment">// Invalid: boolean b3 = 0; // cannot assign int to boolean</span>
        </code></pre>
      </div>

      <hr>

      <h3>6. Null Literal</h3>
      <p>Null literal represents a reference that does not point to any object. It can be assigned to any reference type (class, array, interface).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">NullLiteral.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          String str = <span class="hl-keyword">null</span>;   <span class="hl-comment">// valid</span>
          <span class="hl-type">Student</span> s = <span class="hl-keyword">null</span>;  <span class="hl-comment">// valid</span>
          
          <span class="hl-comment">// Invalid: int x = null; // cannot assign null to primitive</span>
        </code></pre>
      </div>

      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Important Notes on Literals:</div>
          <p>1. Integer literals are <code>int</code> by default; use <code>L</code> for <code>long</code>.<br>
          2. Floating literals are <code>double</code> by default; use <code>F</code> for <code>float</code>.<br>
          3. Char literal must be in single quotes; string in double quotes.<br>
          4. Boolean literals are only <code>true</code> and <code>false</code>.<br>
          5. Null can only be assigned to reference types, not primitives.</p>
        </div>
      </div>
    `
  },

  // ================================================================
  // TYPE CASTING (Implicit/Widening & Explicit/Narrowing)
  // ================================================================
  {
    id: 'type-casting',
    title: 'Type Casting (Implicit & Explicit)',
    icon: 'fas fa-exchange-alt',
    category: 'Core Java Basics',
    content: `
      <h2>What is Type Casting?</h2>
      <p>Type casting is the process of converting a value from one data type to another. In Java, type casting is of two types:</p>
      <ol>
        <li><strong>Implicit Type Casting (Widening):</strong> Automatic conversion from smaller to larger data type.</li>
        <li><strong>Explicit Type Casting (Narrowing):</strong> Manual conversion from larger to smaller data type, with potential data loss.</li>
      </ol>

      <h3>Type Conversion Hierarchy</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Type Hierarchy</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          byte → short → int → long → float → double
            ↘      ↘        ↘       ↘        ↘
              (Automatic widening, no data loss)
          
          double → float → long → int → short → byte
            ↘      ↘        ↘       ↘        ↘
              (Manual narrowing, may lose data)
        </code></pre>
      </div>

      <hr>

      <h3>1. Implicit Type Casting (Widening)</h3>
      <p>Also known as <strong>Automatic Type Conversion</strong>. It occurs when the target data type has a larger range than the source type. No explicit casting is required, and no data is lost.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ImplicitCasting.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">byte</span> b = <span class="hl-number">10</span>;
          <span class="hl-type">short</span> s = b;       <span class="hl-comment">// byte → short (automatic)</span>
          <span class="hl-type">int</span> i = s;         <span class="hl-comment">// short → int</span>
          <span class="hl-type">long</span> l = i;        <span class="hl-comment">// int → long</span>
          <span class="hl-type">float</span> f = l;       <span class="hl-comment">// long → float</span>
          <span class="hl-type">double</span> d = f;      <span class="hl-comment">// float → double</span>
          
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"byte: "</span> + b);
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"short: "</span> + s);
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"int: "</span> + i);
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"long: "</span> + l);
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"float: "</span> + f);
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"double: "</span> + d);
        </code></pre>
      </div>
      <div class="info-box success">
        <i class="fas fa-check-circle"></i>
        <div>
          <div class="info-title">Important Rule:</div>
          <p>Widening happens automatically when assigning a smaller data type to a larger data type. There is no risk of data loss.</p>
        </div>
      </div>

      <hr>

      <h3>2. Explicit Type Casting (Narrowing)</h3>
      <p>Also known as <strong>Manual Type Conversion</strong>. It is required when converting from a larger data type to a smaller data type. We must use the cast operator <code>(type)</code> to explicitly convert. Data may be lost (truncation or overflow).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ExplicitCasting.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">double</span> d = <span class="hl-number">99.99</span>;
          <span class="hl-type">int</span> i = (<span class="hl-type">int</span>) d;       <span class="hl-comment">// double → int (truncates decimal part)</span>
          
          <span class="hl-type">int</span> num = <span class="hl-number">300</span>;
          <span class="hl-type">byte</span> b = (<span class="hl-type">byte</span>) num;    <span class="hl-comment">// int → byte (overflow, value wraps around)</span>
          
          <span class="hl-type">long</span> l = <span class="hl-number">1000000L</span>;
          <span class="hl-type">int</span> i2 = (<span class="hl-type">int</span>) l;       <span class="hl-comment">// long → int</span>
          
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"double d = "</span> + d);
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"int i = "</span> + i);      <span class="hl-comment">// 99</span>
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"int num = "</span> + num);
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"byte b = "</span> + b);    <span class="hl-comment">// 44 (300 mod 256)</span>
          <span class="hl-type">System</span>.out.println(<span class="hl-string">"int i2 = "</span> + i2);
        </code></pre>
      </div>
      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Important Rule:</div>
          <p>Narrowing requires explicit casting and may result in data loss, truncation, or overflow. For example, casting 300 to byte gives 44 (since 300 - 256 = 44).</p>
        </div>
      </div>

      <hr>

      <h3>3. Casting between Primitive and String</h3>
      <p>Java allows conversion between primitive types and String.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">PrimitiveToString.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// Primitive to String</span>
          <span class="hl-type">int</span> x = <span class="hl-number">100</span>;
          String str1 = <span class="hl-type">String</span>.<span class="hl-method">valueOf</span>(x);      <span class="hl-comment">// "100"</span>
          String str2 = <span class="hl-string">""</span> + x;              <span class="hl-comment">// "100" (using concatenation)</span>
          
          <span class="hl-comment">// String to Primitive</span>
          String strNum = <span class="hl-string">"123"</span>;
          <span class="hl-type">int</span> y = <span class="hl-type">Integer</span>.<span class="hl-method">parseInt</span>(strNum);  <span class="hl-comment">// 123</span>
          <span class="hl-type">double</span> d = <span class="hl-type">Double</span>.<span class="hl-method">parseDouble</span>(<span class="hl-string">"3.14"</span>);
          <span class="hl-keyword">boolean</span> b = <span class="hl-type">Boolean</span>.<span class="hl-method">parseBoolean</span>(<span class="hl-string">"true"</span>);
          
          <span class="hl-type">System</span>.out.println(str1);
          <span class="hl-type">System</span>.out.println(y);
        </code></pre>
      </div>

      <hr>

      <h3>4. Casting in Expressions (Type Promotion)</h3>
      <p>In expressions, Java automatically promotes smaller types to larger types to avoid data loss.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">TypePromotion.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">byte</span> a = <span class="hl-number">10</span>;
          <span class="hl-type">byte</span> b = <span class="hl-number">20</span>;
          <span class="hl-type">int</span> result = a + b;   <span class="hl-comment">// bytes are promoted to int for addition</span>
          <span class="hl-type">System</span>.out.println(result);  <span class="hl-comment">// 30</span>
          
          <span class="hl-type">int</span> c = <span class="hl-number">5</span>;
          <span class="hl-type">double</span> d = <span class="hl-number">2.5</span>;
          <span class="hl-type">double</span> result2 = c + d; <span class="hl-comment">// int promoted to double</span>
        </code></pre>
      </div>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Casting in Assignment vs Expressions:</div>
          <p>When assigning, explicit casting may be required for narrowing. In expressions, Java automatically widens to the largest type present.</p>
        </div>
      </div>
    `
  },

  {
    id: 'is-java-pure-oop',
    title: 'Is Java a Pure Object-Oriented Language?',
    icon: 'fas fa-question-circle',
    category: 'Core Java Basics',
    content: `
      <h2>Is Java a Pure Object-Oriented Language?</h2>
      <p>The answer is <strong>NO</strong>. Java is <strong>NOT</strong> a pure object-oriented programming language.</p>

      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Why Java is NOT a Pure OOP Language?</div>
          <p>Java is <strong>not a pure object-oriented language</strong> because it supports <strong>primitive data types</strong> (int, char, double, float, boolean, etc.). A pure OOP language should treat everything as an object.</p>
        </div>
      </div>

      <h3>Reasons Why Java is NOT Pure OOP</h3>
      <ol>
        <li><strong>1. Primitive Data Types:</strong> Java supports primitive data types like int, char, double, float, boolean, byte, short, long. These are not objects.</li>
        <li><strong>2. Static Members:</strong> Java supports static variables and static methods that belong to the class, not objects.</li>
        <li><strong>3. Non-Object Types:</strong> Java allows primitive data types that can be used without creating objects.</li>
        <li><strong>4. Wrapper Classes:</strong> Although Java provides wrapper classes (Integer, Character, etc.), they are not automatically used.</li>
      </ol>

      <h3>Comparison: Pure OOP vs Java</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Feature</th><th>Pure OOP (e.g., Smalltalk)</th><th>Java</th></tr>
          <tr><td>Primitive Types</td><td>Not allowed</td><td>Allowed (int, char, etc.)</td></tr>
          <tr><td>Static Members</td><td>Not allowed</td><td>Allowed (static methods/variables)</td></tr>
          <tr><td>Everything is Object</td><td>Yes</td><td>No (primitives are not objects)</td></tr>
          <tr><td>Wrapper Classes</td><td>Not needed</td><td>Needed (Integer, Character)</td></tr>
        </table>
      </div>

      <h3>Example: Primitives in Java</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">PrimitiveDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span> x = <span class="hl-number">10</span>;       <span class="hl-comment">// primitive, not an object</span>
          <span class="hl-type">char</span> c = <span class="hl-string">'A'</span>;       <span class="hl-comment">// primitive</span>
          <span class="hl-keyword">boolean</span> b = <span class="hl-keyword">true</span>; <span class="hl-comment">// primitive</span>
          
          <span class="hl-comment">// To treat them as objects, we use Wrapper classes</span>
          Integer xObj = <span class="hl-type">Integer</span>.<span class="hl-method">valueOf</span>(x);  <span class="hl-comment">// boxing</span>
          Character cObj = <span class="hl-type">Character</span>.<span class="hl-method">valueOf</span>(c);
        </code></pre>
      </div>

      <h3>Static Members in Java</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StaticDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Calculator</span> {
              <span class="hl-keyword">static</span> <span class="hl-type">int</span> count = <span class="hl-number">0</span>;   <span class="hl-comment">// static variable</span>
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">showCount</span>() {  <span class="hl-comment">// static method</span>
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"Count: "</span> + count);
              }
          }
          
          <span class="hl-comment">// Static members belong to class, not objects</span>
          <span class="hl-type">Calculator</span>.<span class="hl-method">showCount</span>();
        </code></pre>
      </div>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Conclusion:</div>
          <p>Java is <strong>not a pure OOP language</strong> because it supports primitive data types and static members. It is a <strong>mostly object-oriented language</strong> that incorporates some non-OOP features for performance and simplicity.</p>
        </div>
      </div>
    `
  },

  {
    id: 'variables',
    title: 'Variables',
    icon: 'fas fa-code',
    category: 'Core Java Basics',
    content: `
      <h2>Types of Variables in Java</h2>
      <p>Based on the data types, We have only <strong>2 types of variables</strong> in Java:</p>
      <ol>
        <li><strong>1) Primitive Variables</strong></li>
        <li><strong>2) Reference Variables</strong></li>
      </ol>
      <h3>Primitive Variables</h3>
      <p>If we declare a variable using primitive data types like byte, short, int, long, float, double, char and boolean then it is called Primitive Variables.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">PrimitiveVar.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span> x = <span class="hl-number">12</span>;
          <span class="hl-keyword">boolean</span> isEmpty = <span class="hl-keyword">false</span>;
          <span class="hl-type">double</span> y = <span class="hl-number">90.78</span>;
        </code></pre>
      </div>
      <ul>
        <li>We cannot assign null literal on these primitive variable.</li>
        <li>Example: <code>char x = null;</code> <em>(Invalid)</em></li>
        <li>We cannot call any static OR non static method by using these primitive variable.</li>
      </ul>
      <h3>Reference Variables</h3>
      <p>If we declare a variable with reference data type (except 8 primitive data types) then it is called Reference Variables.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ReferenceVar.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          Student s;
          Integer i;
          String str;
          <span class="hl-comment">// s, i and str all are reference variable</span>
          Student s = <span class="hl-keyword">null</span>;  <span class="hl-comment">// Valid</span>
        </code></pre>
      </div>
      <h3>Based on Declaration Position</h3>
      <p>Variables are further classified into 4 categories:</p>
      <ol>
        <li>Class Variable OR Static Fields</li>
        <li>Instance Variables OR Non Static Fields</li>
        <li>Local Variables</li>
        <li>Parameter Variables</li>
      </ol>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">VariableTypes.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Test</span> {
              <span class="hl-keyword">static</span> <span class="hl-type">int</span> a = <span class="hl-number">100</span>;  <span class="hl-comment">// static Field</span>
              <span class="hl-type">int</span> b = <span class="hl-number">200</span>;      <span class="hl-comment">// Non-static Field</span>
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">accept</span>(<span class="hl-type">int</span> c) {  <span class="hl-comment">// parameter Variable</span>
                  <span class="hl-type">int</span> d = <span class="hl-number">400</span>;  <span class="hl-comment">// Local Variable</span>
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"static Field: "</span> + a);
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"Non-static Field: "</span> + b);
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"Parameter Variable: "</span> + c);
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"Local Variable: "</span> + d);
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // CONTROL STATEMENTS IN JAVA (COMPLETE - Day 15 to Day 19)
  // ================================================================
  {
    id: 'control-statements-complete',
    title: 'Control Statements in Java',
    icon: 'fas fa-code-branch',
    category: 'Control Flow',
    content: `
      <h2>Control Statements in Java</h2>
      <p>Control statements allow us to execute programs from top to bottom but using control statements we can control the flow of execution of a Java program.</p>
      <p>Control statements fall into three major categories:</p>

      <h3>1. Selection OR Decision-Making Statements</h3>
      <ul>
        <li>a) if statement</li>
        <li>b) if-else statement</li>
        <li>c) else-if statement</li>
        <li>d) Nested if</li>
        <li>e) switch statement (JDK 17V with yield as a return value)</li>
      </ul>

      <h3>2. Iteration OR Looping Statements</h3>
      <ul>
        <li>a) do-while loop</li>
        <li>b) while loop</li>
        <li>c) for loop</li>
        <li>d) for-each loop (Enhanced for loop)</li>
      </ul>

      <h3>3. Jumping OR Branching Statements</h3>
      <ul>
        <li>a) break</li>
        <li>b) continue</li>
        <li>c) return</li>
        <li>d) yield</li>
      </ul>

      <hr>

      <h2>1. If Statement</h2>
      <p>It is a decision-making statement. It is used to test a boolean expression. The expression must return boolean type. It allows us to execute a block of code only when a given condition is true.</p>
      <p>If the condition returns false, the control skips the if block and moves to the next statement.</p>

      <h3>Syntax:</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">IfSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">if</span>(condition) {
              <span class="hl-comment">// statements executed when condition is true</span>
          }
        </code></pre>
      </div>

      <h3>Program 1: Displaying a low battery warning</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">BatteryCheck.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> batteryPercentage = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter battery percentage: "</span>));
              <span class="hl-keyword">if</span>(batteryPercentage &lt; <span class="hl-number">20</span>) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Low Battery"</span>);
              }
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Program completed"</span>);
          }
        </code></pre>
      </div>

      <h3>Program 2: Password Length Validation</h3>
      <p>String class has provided a predefined non-static method called <code>length()</code> through which we can find out the length of the given String.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Password.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              String password = <span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter your password: "</span>);
              <span class="hl-keyword">if</span>(password.<span class="hl-method">length</span>() &lt; <span class="hl-number">8</span>) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Password is weak because length is less than 8"</span>);
              }
          }
        </code></pre>
      </div>

      <hr>

      <h2>2. If-Else Statement</h2>
      <p>The if-else statement is used when one action must be performed if the condition is true and a different action if the condition is false.</p>

      <h3>Syntax:</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">IfElseSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">if</span>(condition) {
              <span class="hl-comment">// statements executed when condition is true</span>
          }
          <span class="hl-keyword">else</span> {
              <span class="hl-comment">// statements executed when condition is false</span>
          }
        </code></pre>
      </div>

      <h3>Program 1: Check Number is Even or Odd</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">EvenOdd.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> num = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter a number: "</span>));
              <span class="hl-keyword">if</span>(num % <span class="hl-number">2</span> == <span class="hl-number">0</span>) {
                  <span class="hl-type">IO</span>.println(num + <span class="hl-string">" is even"</span>);
              }
              <span class="hl-keyword">else</span> {
                  <span class="hl-type">IO</span>.println(num + <span class="hl-string">" is odd"</span>);
              }
          }
        </code></pre>
      </div>

      <h3>Program 2: Train Berth Availability</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">TrainBerth.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> available = <span class="hl-number">5</span>;
              <span class="hl-type">int</span> wanted = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter the number of berth: "</span>));
              <span class="hl-keyword">if</span>(available &gt;= wanted) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Berth is available"</span>);
              }
              <span class="hl-keyword">else</span> {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Berth is not available"</span>);
              }
          }
        </code></pre>
      </div>

      <hr>

      <h2>3. Else-If Ladder</h2>
      <p>If we want to check multiple conditions one after another and wants to execute only one matching block among them.</p>

      <h3>Syntax:</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ElseIfSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">if</span>(condition1) {
              <span class="hl-comment">// statements</span>
          }
          <span class="hl-keyword">else</span> <span class="hl-keyword">if</span>(condition2) {
              <span class="hl-comment">// statements</span>
          }
          <span class="hl-keyword">else</span> <span class="hl-keyword">if</span>(condition3) {
              <span class="hl-comment">// statements</span>
          }
          <span class="hl-keyword">else</span> {
              <span class="hl-comment">// statements executed when all conditions are false</span>
          }
        </code></pre>
      </div>

      <h3>Program 1: Student Grading System</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">GradeSystem.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> marks = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter Your Marks: "</span>));
              <span class="hl-keyword">if</span>(marks &gt;= <span class="hl-number">90</span>) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Grade A"</span>);
              }
              <span class="hl-keyword">else</span> <span class="hl-keyword">if</span>(marks &gt;= <span class="hl-number">75</span>) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Grade B"</span>);
              }
              <span class="hl-keyword">else</span> <span class="hl-keyword">if</span>(marks &gt;= <span class="hl-number">60</span>) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Grade C"</span>);
              }
              <span class="hl-keyword">else</span> {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Fail"</span>);
              }
          }
        </code></pre>
      </div>

      <h3>Program 2: Traffic Signal System</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">TrafficSignal.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              String signal = <span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter Signal Color: "</span>);
              <span class="hl-keyword">if</span>(signal.<span class="hl-method">equalsIgnoreCase</span>(<span class="hl-string">"RED"</span>)) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"STOP"</span>);
              }
              <span class="hl-keyword">else</span> <span class="hl-keyword">if</span>(signal.<span class="hl-method">equalsIgnoreCase</span>(<span class="hl-string">"YELLOW"</span>)) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"READY"</span>);
              }
              <span class="hl-keyword">else</span> {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"GO"</span>);
              }
          }
        </code></pre>
      </div>

      <hr>

      <h2>4. Nested If</h2>
      <p>If an if statement is written inside another if statement, it is called nested if.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">NestedIf.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> age = <span class="hl-number">20</span>;
              <span class="hl-type">boolean</span> hasLicense = <span class="hl-keyword">true</span>;
              <span class="hl-keyword">if</span>(age &gt;= <span class="hl-number">18</span>) {
                  <span class="hl-keyword">if</span>(hasLicense) {
                      <span class="hl-type">IO</span>.println(<span class="hl-string">"You can drive"</span>);
                  }
                  <span class="hl-keyword">else</span> {
                      <span class="hl-type">IO</span>.println(<span class="hl-string">"No license"</span>);
                  }
              }
              <span class="hl-keyword">else</span> {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Too young"</span>);
              }
          }
        </code></pre>
      </div>

      <hr>

      <h2>5. Switch Statement</h2>
      <p>If we want to check multiple conditions one after another and wants to execute only one matching block among them, and that condition should be equal to the constant, then we need to use switch statement.</p>
      <p>Default statement is optional. If no case matches, it executes the default block.</p>
      <p>Break statement is optional. It is used to terminate the switch.</p>

      <h3>Syntax (Traditional):</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SwitchSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">switch</span>(expression) {
              <span class="hl-keyword">case</span> value1:
                  <span class="hl-comment">// statements</span>
                  <span class="hl-keyword">break</span>;
              <span class="hl-keyword">case</span> value2:
                  <span class="hl-comment">// statements</span>
                  <span class="hl-keyword">break</span>;
              <span class="hl-keyword">default</span>:
                  <span class="hl-comment">// statements</span>
          }
        </code></pre>
      </div>

      <h3>Syntax (JDK 14+ Arrow Syntax with yield):</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SwitchArrowSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">switch</span>(expression) {
              <span class="hl-keyword">case</span> value1 -&gt; {
                  <span class="hl-comment">// statements</span>
                  <span class="hl-keyword">yield</span> result1;
              }
              <span class="hl-keyword">case</span> value2 -&gt; result2;
              <span class="hl-keyword">default</span> -&gt; result3;
          }
        </code></pre>
      </div>

      <h3>Rules to use switch:</h3>
      <ul>
        <li>We can use byte, short, int, char, String, enum, Integer, Short, Byte, Character as a switch expression.</li>
        <li>We can't use float, double, long as a switch expression.</li>
        <li>We can use byte, short, int, char, String, enum, Integer, Short, Byte, Character in switch cases.</li>
      </ul>

      <h3>Program 1: Odd/Even Number with switch expression</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SwitchDemo1.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> number = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter a number from 1 to 10: "</span>));
              String result = <span class="hl-keyword">switch</span>(number) {
                  <span class="hl-keyword">case</span> <span class="hl-number">1</span>, <span class="hl-number">3</span>, <span class="hl-number">5</span>, <span class="hl-number">7</span>, <span class="hl-number">9</span> -&gt; <span class="hl-string">"Odd Number"</span>;
                  <span class="hl-keyword">case</span> <span class="hl-number">2</span>, <span class="hl-number">4</span>, <span class="hl-number">6</span>, <span class="hl-number">8</span>, <span class="hl-number">10</span> -&gt; <span class="hl-string">"Even Number"</span>;
                  <span class="hl-keyword">default</span> -&gt; <span class="hl-string">"Invalid Input"</span>;
              };
              <span class="hl-type">IO</span>.println(number + <span class="hl-string">" is "</span> + result);
          }
        </code></pre>
      </div>

      <h3>Program 2: Switch with String</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SwitchString.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              String grade = <span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter Student grade A/B/C/D: "</span>);
              String result = <span class="hl-keyword">switch</span>(grade) {
                  <span class="hl-keyword">case</span> <span class="hl-string">"A"</span> -&gt; <span class="hl-string">"Excellent!!"</span>;
                  <span class="hl-keyword">case</span> <span class="hl-string">"B"</span> -&gt; <span class="hl-string">"Very Good!!"</span>;
                  <span class="hl-keyword">case</span> <span class="hl-string">"C"</span> -&gt; <span class="hl-string">"Good!!"</span>;
                  <span class="hl-keyword">default</span> -&gt; <span class="hl-string">"Invalid Grade"</span>;
              };
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Your grade is: "</span> + grade + <span class="hl-string">" and your result is: "</span> + result);
          }
        </code></pre>
      </div>

      <h3>Program 3: Switch with Traditional Cases (Multiple Labels)</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SwitchMulti.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> month = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter month number 1-12: "</span>));
              String result;
              <span class="hl-keyword">switch</span>(month) {
                  <span class="hl-keyword">case</span> <span class="hl-number">1</span>:
                  <span class="hl-keyword">case</span> <span class="hl-number">2</span>:
                  <span class="hl-keyword">case</span> <span class="hl-number">3</span>:
                      result = <span class="hl-string">"Q1"</span>;
                      <span class="hl-keyword">break</span>;
                  <span class="hl-keyword">case</span> <span class="hl-number">4</span>:
                  <span class="hl-keyword">case</span> <span class="hl-number">5</span>:
                  <span class="hl-keyword">case</span> <span class="hl-number">6</span>:
                      result = <span class="hl-string">"Q2"</span>;
                      <span class="hl-keyword">break</span>;
                  <span class="hl-keyword">default</span>:
                      result = <span class="hl-string">"Invalid"</span>;
              }
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Quarter is: "</span> + result);
          }
        </code></pre>
      </div>

      <hr>

      <h3>How to compare Two String values?</h3>
      <p>To compare two String values we can use the following two methods given by String class:</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StringCompare.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// 1) public boolean equals(Object obj)</span>
          <span class="hl-comment">// It is an overridden method of String class, used to compare two String objects based on the content.</span>
          <span class="hl-comment">// It is case sensitive method</span>
          
          String str1 = <span class="hl-string">"java"</span>;
          String str2 = <span class="hl-string">"java"</span>;
          <span class="hl-type">IO</span>.println(str1.<span class="hl-method">equals</span>(str2));  <span class="hl-comment">// true</span>
          
          <span class="hl-comment">// 2) public boolean equalsIgnoreCase(String str)</span>
          <span class="hl-comment">// Used to compare two String objects based on the content by ignoring the case, that means A and a are same</span>
          
          String str3 = <span class="hl-string">"JAVA"</span>;
          <span class="hl-type">IO</span>.println(str1.<span class="hl-method">equalsIgnoreCase</span>(str3));  <span class="hl-comment">// true</span>
        </code></pre>
      </div>

      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Important:</div>
          <p>Never compare String objects by using == operator. Always use .equals() or .equalsIgnoreCase() method.</p>
        </div>
      </div>
    `
  },

  {
    id: 'loops',
    title: 'Loops',
    icon: 'fas fa-sync',
    category: 'Control Flow',
    content: `
      <h2>Loops in Java</h2>
      <p>If we want to execute the same code multiple times then writing the same code again and again is not a good programming practice. So, loops are used to control the flow of execution.</p>

      <h3>Common Characteristics of Loops</h3>
      <ol>
        <li><strong>1) Initialization:</strong> Starting point of the loop</li>
        <li><strong>2) Condition:</strong> To check if the loop should continue</li>
        <li><strong>3) Updating/Increment/Decrement:</strong> To modify the loop variable</li>
      </ol>

      <h3>a) While Loop</h3>
      <p>While loop is an entry-controlled loop.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">WhileSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">while</span>(condition) {
              <span class="hl-comment">// statements</span>
          }
        </code></pre>
      </div>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">WhileDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> i = <span class="hl-number">1</span>;
              <span class="hl-keyword">while</span>(i &lt;= <span class="hl-number">5</span>) {
                  <span class="hl-type">IO</span>.println(i);
                  i++;
              }
          }
          <span class="hl-comment">// Output: 1 2 3 4 5</span>
        </code></pre>
      </div>

      <h3>b) Do-While Loop</h3>
      <p>Do-while is an exit-controlled loop because without checking the condition, it will execute the body at-least once.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">DoWhileSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">do</span> {
              <span class="hl-comment">// statements</span>
          } <span class="hl-keyword">while</span>(condition);
        </code></pre>
      </div>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">DoWhileDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> i = <span class="hl-number">1</span>;
              <span class="hl-keyword">do</span> {
                  <span class="hl-type">IO</span>.println(i);
                  i++;
              } <span class="hl-keyword">while</span>(i &lt;= <span class="hl-number">5</span>);
          }
        </code></pre>
      </div>

      <h3>c) For Loop</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ForSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">for</span>(initialization; condition; update) {
              <span class="hl-comment">// statements</span>
          }
        </code></pre>
      </div>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ForDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= <span class="hl-number">5</span>; i++) {
                  <span class="hl-type">IO</span>.println(i);
              }
          }
        </code></pre>
      </div>

      <h3>d) For-Each Loop (Enhanced for loop)</h3>
      <p>Used to iterate over arrays and collections.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ForEachSyntax.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">for</span>(type variable : array/collection) {
              <span class="hl-comment">// statements</span>
          }
        </code></pre>
      </div>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ForEachDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span>[] numbers = {<span class="hl-number">10</span>, <span class="hl-number">20</span>, <span class="hl-number">30</span>};
              <span class="hl-keyword">for</span>(<span class="hl-type">int</span> num : numbers) {
                  <span class="hl-type">IO</span>.println(num);
              }
          }
        </code></pre>
      </div>
    `
  },

  {
    id: 'Jumping or Branching Statements',
    title: 'Jumping or Branching Statements',
    icon: 'fas fa-random',
    category: 'Control Flow',
    content: `
      <h2>Jumping OR Branching Statements</h2>
      <p>Used to tra Non Static fieldser control from one part of the program to another.</p>

      <h3>a) Break Statement</h3>
      <p>Used to exit the loop or switch immediately.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">BreakDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= <span class="hl-number">10</span>; i++) {
                  <span class="hl-keyword">if</span>(i == <span class="hl-number">5</span>) {
                      <span class="hl-keyword">break</span>;  <span class="hl-comment">// stop at 5</span>
                  }
                  <span class="hl-type">IO</span>.println(i);
              }
          }
          <span class="hl-comment">// Output: 1 2 3 4</span>
        </code></pre>
      </div>

      <h3>b) Continue Statement</h3>
      <p>Skips the rest of the statements in current iteration and goes to the next iteration.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ContinueDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= <span class="hl-number">5</span>; i++) {
                  <span class="hl-keyword">if</span>(i == <span class="hl-number">3</span>) {
                      <span class="hl-keyword">continue</span>;  <span class="hl-comment">// skip 3</span>
                  }
                  <span class="hl-type">IO</span>.println(i);
              }
          }
          <span class="hl-comment">// Output: 1 2 4 5</span>
        </code></pre>
      </div>

      <h3>c) Return Statement</h3>
      <p>Returns a value from a method and terminates the method execution.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ReturnDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">int</span> <span class="hl-method">add</span>(<span class="hl-type">int</span> a, <span class="hl-type">int</span> b) {
              <span class="hl-keyword">return</span> a + b;
          }
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> result = <span class="hl-method">add</span>(<span class="hl-number">10</span>, <span class="hl-number">20</span>);
              <span class="hl-type">IO</span>.println(result);
          }
        </code></pre>
      </div>

      <h3>d) Yield Statement</h3>
      <p>Used in switch expressions to return a value from a switch block (JDK 14+).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">YieldDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> day = <span class="hl-number">2</span>;
              String type = <span class="hl-keyword">switch</span>(day) {
                  <span class="hl-keyword">case</span> <span class="hl-number">1</span>, <span class="hl-number">7</span> -&gt; <span class="hl-string">"Weekend"</span>;
                  <span class="hl-keyword">case</span> <span class="hl-number">2</span>, <span class="hl-number">3</span>, <span class="hl-number">4</span>, <span class="hl-number">5</span>, <span class="hl-number">6</span> -&gt; {
                      <span class="hl-type">IO</span>.println(<span class="hl-string">"It's a weekday"</span>);
                      <span class="hl-keyword">yield</span> <span class="hl-string">"Weekday"</span>;
                  }
                  <span class="hl-keyword">default</span> -&gt; <span class="hl-string">"Invalid"</span>;
              };
              <span class="hl-type">IO</span>.println(type);
          }
        </code></pre>
      </div>`
  },

  // ================================================================
  // FUNCTIONS
  // ================================================================
  {
    id: 'what-is-function',
    title: 'What is a Function?',
    icon: 'fas fa-tools',
    category: 'Functions',
    content: `
      <h2>What is a Function?</h2>
      <p>A function is a <strong>self-defined block</strong> which is used to write the business logic, some calculation, printing the data and so on.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">FunctionExample.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">sum</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) {
              <span class="hl-type">System</span>.out.println(x + y);
          }
        </code></pre>
      </div>
      <p>A function may or may not return a value.</p>
      <p><strong>Case 1:</strong> Function not returning a value</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">VoidFunction.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">sum</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) {
              <span class="hl-type">System</span>.out.println(x + y);
          }
        </code></pre>
      </div>
      <p><strong>Case 2:</strong> Function returning a value</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ReturnFunction.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-type">int</span> <span class="hl-method">sum</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) {
              <span class="hl-keyword">return</span> x + y;
          }
        </code></pre>
      </div>
      <h3>Types of Functions</h3>
      <ul>
        <li><strong>1) Predefined OR Built-in function:</strong> A function which is developed by language creator itself is called predefined function.</li>
        <li><strong>2) User-defined OR Custom function:</strong> A function which is written by user/Developer for its own requirement and specification is called user-defined function.</li>
      </ul>
      <h3>Advantages of Function:</h3>
      <ol>
        <li><strong>1) Modularity:</strong> Dividing the bigger task into smaller tasks.</li>
        <li><strong>2) Easy understanding:</strong> Once the task is divided into a number of independent modules then it is easy to understand the entire module.</li>
        <li><strong>3) Reusability:</strong> We can reuse a particular module for 'N' number of times.</li>
        <li><strong>4) Easy debugging:</strong> Each module is isolated from another module so the debugging is easy because we can debug only one module where we have syntax or semantics error.</li>
      </ol>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Approach2.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-method">sum</span>(<span class="hl-number">4</span>, <span class="hl-number">5</span>);
              <span class="hl-method">sub</span>(<span class="hl-number">4</span>, <span class="hl-number">5</span>);
              <span class="hl-method">mul</span>(<span class="hl-number">4</span>, <span class="hl-number">5</span>);
              <span class="hl-method">div</span>(<span class="hl-number">4</span>, <span class="hl-number">5</span>);
          }
          <span class="hl-keyword">void</span> <span class="hl-method">sum</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) { ... }
          <span class="hl-keyword">void</span> <span class="hl-method">sub</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) { ... }
          <span class="hl-keyword">void</span> <span class="hl-method">mul</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) { ... }
          <span class="hl-keyword">void</span> <span class="hl-method">div</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) { ... }
        </code></pre>
      </div>
      <h3>Why we pass parameter to a function?</h3>
      <p>We should pass parameter to a function for getting <strong>more information</strong> regarding the function. If we don't pass parameter then the information's are not complete, it is partial information.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ParameterExample.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">deposit</span>(<span class="hl-type">double</span> amount) { }
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">sum</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) { }
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">sleep</span>(<span class="hl-type">int</span> hours) { }
        </code></pre>
      </div>
      <h3>Why functions are called Method in Java?</h3>
      <p>In C++ language, there is a facility to write a function inside the class as well outside of the class by using <strong>scope resolution operator (::)</strong> but in java we can write a function <strong>inside the class only</strong>, we can't define a function outside of the class, that is reason functions are called <strong>Method</strong> in java.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Method.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Hello</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">m1</span>() { }  <span class="hl-comment">// Method</span>
          }
        </code></pre>
      </div>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>From JDK 25V we can write a method without class which is known as <strong>"Compact source file"</strong> but here internally compiler is generating a final class which is based on the file name.</p>
        </div>
      </div>
    `
  },

  // ================================================================
  // METHOD OVERLOADING
  // ================================================================
  {
    id: 'method-overloading',
    title: 'Method Overloading',
    icon: 'fas fa-list-alt',
    category: 'Functions',
    content: `
      <h2>What is Method Overloading in Java?</h2>
      <p>Allows us to write two or more methods in the same class or in super and sub classes (using Inheritance) such that they differ in their parameter list but names are same.</p>
      <p>Overloading is possible based on:</p>
      <ol>
        <li><strong>Number of Parameter</strong></li>
        <li><strong>Type of Parameter</strong></li>
        <li><strong>Order of Parameter (Sequence of data type)</strong></li>
      </ol>
      <h3>Program based on Number of Parameters</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MOL1.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-method">accept</span>(<span class="hl-number">10</span>, <span class="hl-number">20</span>, <span class="hl-number">40</span>);
          }
          <span class="hl-keyword">void</span> <span class="hl-method">accept</span>(<span class="hl-type">int</span> x) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"One Parameter"</span>);
          }
          <span class="hl-keyword">void</span> <span class="hl-method">accept</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Two Parameters"</span>);
          }
          <span class="hl-keyword">void</span> <span class="hl-method">accept</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y, <span class="hl-type">int</span> z) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Three Parameters"</span>);
          }
        </code></pre>
      </div>
      <h3>Program based on Type of Parameters</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MOL2.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">show</span>(<span class="hl-type">int</span> a) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"INT"</span>);
          }
          <span class="hl-keyword">void</span> <span class="hl-method">show</span>(<span class="hl-type">double</span> a) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"DOUBLE"</span>);
          }
        </code></pre>
      </div>
      <h3>Program based on Order of Parameters</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MOL3.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">accept</span>(<span class="hl-type">double</span> x, <span class="hl-type">int</span> y) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"double - int"</span>);
          }
          <span class="hl-keyword">void</span> <span class="hl-method">accept</span>(<span class="hl-type">int</span> x, <span class="hl-type">double</span> y) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"int - double"</span>);
          }
        </code></pre>
      </div>
      <h3>Rules of Overloading a Method</h3>
      <ol>
        <li> Methods must have the same name.</li>
        <li> Must differ in number, type, or order of parameters.</li>
        <li> Can change the return type.</li>
        <li> Access modifiers can change.</li>
        <li> Static methods can be overloaded.</li>
        <li> Type promotion occurs automatically.</li>
        <li> Cannot overload by only changing return type.</li>
      </ol>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>Method Overloading is an example of <strong>Static Polymorphism</strong> concept. In Java <code>System.out.println()</code> is the best example for Method Overloading.</p>
        </div>
      </div>
    `
  },

  // ================================================================
  // OOP CONCEPTS
  // ================================================================

  {
    id: 'what-is-oops',
    title: 'What is OOPs?',
    icon: 'fas fa-cubes',
    category: 'OOP',
    content: `
    <h2>What is OOPs?</h2>
    <h2>What is an Object?</h2>
    <ul>
      <li>An <strong>Object</strong> is a physical entity which exists in the real world. <br><strong>Example:</strong> Marker, Mouse, Fan, Car, Bike etc.</li>
    </ul>

    <h3>Characteristics of an Object</h3>
    <p>An object is having <strong>3 characteristics</strong>:</p>
    <ol>
      <li><strong>Identification OR Name</strong> of the Object</li>
      <li><strong>Properties OR State OR Attributes OR Fields</strong> of an Object [Non static fields]</li>
      <li><strong>Behaviour OR Functionality</strong> of an Object (Non static methods)</li>
    </ol>

    <h3>How to create an object in java?</h3>
    <p>In order to create an object in java we should use <strong>class name</strong> and <strong>new keyword</strong>.</p>
    <p><strong>Example:</strong></p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Student.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Student</span> {
            <span class="hl-comment">// class body</span>
        }
        
        <span class="hl-type">Student</span> raj = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>();
        <span class="hl-comment">//  |        |        |         |</span>
        <span class="hl-comment">// class    reference  new       constructor</span>
        <span class="hl-comment">// name     variable   keyword</span>
        <span class="hl-comment">//                     for dynamic memory allocation</span>
      </code></pre>
    </div>

    <h3>Definition of OOP</h3>
    <ul>
      <li>It is a technique through which we can design and develop Java programs using <strong>class</strong> and <strong>object</strong>.</li>
      <li>In OOP, We concentrate on objects rather than function (POP).</li>
      <li>As a developer, If we are able to write Java programs on real life objects (Physical Entity) then we can say we are <strong>Object Oriented Programmer</strong>.</li>
    </ul>

    <h3>Advantages of OOP</h3>
    <ol>
      <li><strong>Modularity</strong> [Dividing the bigger task into smaller tasks]</li>
      <li><strong>Reusability</strong> [Basically we will reuse the BLC classes &amp; Java Code using Inheritance]</li>
      <li><strong>Flexibility</strong> [Easy to maintain, Can achieve using interface concept]</li>
    </ol>

    <h3>Features of OOP</h3>
    <p>We have <strong>six features</strong>:</p>
    <ol>
      <li>Class</li>
      <li>Object</li>
      <li>Abstraction</li>
      <li>Encapsulation</li>
      <li>Inheritance</li>
      <li>Polymorphism</li>
    </ol>

    <h3>What is a class?</h3>
    <p>A class is a <strong>model OR blueprint OR template OR prototype</strong> for creating an object.</p>
    <p><strong>Example:</strong></p>
    <p><em>Civil Engineer:</em> Rough Diagram / Architecture [class] → Restaurant [object]</p>
    <ul>
      <li>A class is a <strong>user-defined data type</strong>.</li>
      <li>A CLASS IS A COMPONENT WHICH IS USED TO DEFINE OBJECT PROPERTIES (NON STATIC FIELD) AND OBJECT BEHAVIOUR (NON STATIC METHODS).</li>
    </ul>

    <h3>Real-life Example: Hammer is Object</h3>
    <div class="table-responsive">
      <table>
        <tr><th>Without Class (Individual work)</th><th>With Class (Blueprint)</th></tr>
        <tr><td>1 HR : To gather Iron raw Material</td><td>1 HR : To gather Iron raw Material</td></tr>
        <tr><td>2 HRS : To boil the Iron raw</td><td>2 HRS : To boil the Iron raw</td></tr>
        <tr><td>4 HRS : To beat &amp; provide the Hammer Shape</td><td>1 HR : To create a dye diagram (class)</td></tr>
        <tr><td>Total: 7 HRS × 100 = 700 HRS</td><td>3 HRS : To create an original dye</td></tr>
        <tr><td></td><td>1 HR : To cast the liquid in the dye</td></tr>
        <tr><td></td><td>Total: 8 HRS × 100 = 400 HRS</td></tr>
      </table>
    </div>

    <h3>WAP in java to represent student object and initialize the student properties using reference variable</h3>
    <p><strong>Diagram:</strong></p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Student Object (raj)</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        id = 101
        name = Raj Gourav
        height = 5.9
        talk()
        writeExam()
        walk()
      </code></pre>
    </div>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Student Object (priya)</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        id = 201
        name = Priya
        height = 5.8
        talk()
        writeExam()
        walk()
      </code></pre>
    </div>

    <h3>Programs:</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Student.java (BLC)</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.oop;
        <span class="hl-comment">//BLC</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Student</span> {
            String name;      <span class="hl-comment">//non static field</span>
            <span class="hl-type">int</span> id;           <span class="hl-comment">//non static field</span>
            <span class="hl-type">double</span> height;     <span class="hl-comment">//non static field</span>
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">talk</span>() {  <span class="hl-comment">//non static method</span>
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Hello Everone, My name is :"</span>+name);
                <span class="hl-type">IO</span>.println(<span class="hl-string">"My id is :"</span>+id+<span class="hl-string">" and my height is :"</span>+height);
            }
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">writeExam</span>() {
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Hii guys, I am "</span>+name+<span class="hl-string">" every saturday I need to write exam"</span>);
            }
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">walk</span>() {
                <span class="hl-type">IO</span>.println(<span class="hl-string">"After exam, I am going for long walk for enjoying my sunday"</span>);
            }
        }
      </code></pre>
    </div>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">Main.java (ELC)</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.oop;
        <span class="hl-comment">//ELC</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Main</span> {
            <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
                <span class="hl-type">Student</span> raj = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>();
                <span class="hl-comment">//Initializing the object properties using reference variable</span>
                raj.name = <span class="hl-string">"Raj Gourav"</span>;
                raj.id = <span class="hl-number">101</span>;
                raj.height = <span class="hl-number">5.9</span>;
                
                <span class="hl-comment">//[For today only both the BLC and ELC class must be in the same package only]</span>
                raj.<span class="hl-method">talk</span>();
                raj.<span class="hl-method">writeExam</span>();
                raj.<span class="hl-method">walk</span>();
                
                <span class="hl-comment">//-----------------------------------------------------</span>
                
                <span class="hl-type">Student</span> priya = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>();
                <span class="hl-comment">//Initializing the object properties using reference variable</span>
                priya.name = <span class="hl-string">"Priya"</span>;
                priya.height = <span class="hl-number">5.8</span>;
                priya.id = <span class="hl-number">201</span>;
                
                priya.<span class="hl-method">talk</span>();
                priya.<span class="hl-method">writeExam</span>();
                priya.<span class="hl-method">walk</span>();
            }
        }
      </code></pre>
    </div>

    <h3>Steps for creating Object Oriented Programming [BLC &amp; ELC must be in the same package]</h3>
    <ol>
      <li><strong>Step 1:</strong> Create the Object based on the BLC class (Student) inside ELC class. [main method]</li>
      <li><strong>Step 2:</strong> Define all the object properties and behaviour inside the BLC class based on your imagination. [Thinking]</li>
      <li><strong>Step 3:</strong> Initialize all the object properties with user friendly value by using reference variable. [raj.rollNumber = 111]</li>
      <li><strong>Step 4:</strong> call the behaviour (calling the methods) [raj.talk()]</li>
    </ol>
  `
  },
  {
    id: 'initializing-object-properties',
    title: 'Initializing Object Properties',
    icon: 'fas fa-edit',
    category: 'OOP',
    content: `
    <h2>Initializing our Object properties through reference Variable</h2>
    <ul>
      <li>If we initialize our object properties ( Non Static Fields) through reference variable then our BLC &amp; ELC class must be in the same package OR we need to declare our  Non Static Fields with public modifier, which is not recommended.</li>
    </ul>

    <h3>Employee.java (BLC)</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Employee.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.oop.blc;
        <span class="hl-comment">//BLC</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Employee</span> {
            <span class="hl-keyword">public</span> <span class="hl-type">int</span> employeeId;
            <span class="hl-keyword">public</span> String employeeName;
            <span class="hl-keyword">public</span> <span class="hl-type">double</span> employeeSalary;
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">talk</span>() {
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Employee id is :"</span>+employeeId);
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Employee name is :"</span>+employeeName);
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Employee salary is :"</span>+employeeSalary);
            }
        }
      </code></pre>
    </div>

    <h3>EmployeeELC.java (ELC)</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">EmployeeELC.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.oop.elc;
        <span class="hl-keyword">import</span> com.oop.blc.Employee;
        <span class="hl-comment">//ELC</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">EmployeeELC</span> {
            <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
                <span class="hl-type">Employee</span> scott = <span class="hl-keyword">new</span> <span class="hl-type">Employee</span>();
                scott.employeeId = <span class="hl-number">101</span>;
                scott.employeeName = <span class="hl-string">"Mr. Scott"</span>;
                scott.employeeSalary = <span class="hl-number">90000.00</span>;
                scott.<span class="hl-method">talk</span>();
            }
        }
      </code></pre>
    </div>

    <div class="info-box note">
      <i class="fas fa-info-circle"></i>
      <div>
        <div class="info-title">Note:</div>
        <p>Employee class is available in another package so, the access the class as well as non static fields, It must be public.</p>
      </div>
    </div>

    <hr>

    <h2>Initializing the non static fields using non static methods</h2>
    <p>We can initialize our non static fields through public non static methods because if we initialize through reference variable then BLC &amp; ELC must be in the same package.</p>

    <h3>Instance Variable OR Non Static Field</h3>
    <p>It is a field which we declare at class level. If a non-static field is declared inside the class but outside of the method then it is called Non static field.</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Student.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Student</span> {
            <span class="hl-type">int</span> rollNumber;      <span class="hl-comment">//Non static field</span>
            String studentName;   <span class="hl-comment">//Non static field</span>
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">showData</span>() {
                <span class="hl-comment">// code</span>
            }
        }
      </code></pre>
    </div>
    <ul>
      <li>The life of a non static field will start at the time of creating the object that means we can say we can't think about non static field without object.</li>
      <li>As far as its accessibility is concerned, Non static fields are accessible anywhere within the same class OR depends upon the access modifier we have applied on the non static field. [To achieve Data hiding, We should compulsory use private access modifier]</li>
    </ul>

    <h3>Program: Player.java (BLC)</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Player.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.oop.blc;
        <span class="hl-comment">//BLC</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Player</span> {
            <span class="hl-type">int</span> playerId;
            String playerName;
            <span class="hl-type">double</span> basePrice;
            
            <span class="hl-comment">//To initialize the non static fields</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">setPlayerData</span>(<span class="hl-type">int</span> id, String name, <span class="hl-type">double</span> price) {
                playerId = id;
                playerName = name;
                basePrice = price;
            }
            
            <span class="hl-comment">//Will print Player data</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">showPlayerData</span>() {
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Player id is :"</span>+playerId);
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Player name is :"</span>+playerName);
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Player price is :"</span>+basePrice);
            }
        }
      </code></pre>
    </div>

    <h3>Main.java (ELC)</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Main.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.oop.elc;
        <span class="hl-keyword">import</span> com.oop.blc.Player;
        <span class="hl-comment">//ELC</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Main</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Player</span> virat = <span class="hl-keyword">new</span> <span class="hl-type">Player</span>();
                virat.<span class="hl-method">setPlayerData</span>(<span class="hl-number">101</span>, <span class="hl-string">"Virat"</span>, <span class="hl-number">12890.90</span>);
                virat.<span class="hl-method">showPlayerData</span>();
            }
        }
      </code></pre>
    </div>

    <hr>

    <h2>How to initialize the object properties with parameter variable as per our requirement</h2>
    <p><strong>Grade Calculation Rules:</strong></p>
    <ul>
      <li>If salary is &gt;= 75000 [Grade 'A']</li>
      <li>If salary is &gt;= 65000 [Grade 'B']</li>
      <li>If salary is &gt;= 50000 [Grade 'C']</li>
      <li>else D Grade</li>
    </ul>

    <h3>Employee.java (BLC)</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Employee.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.oop.blc;
        <span class="hl-comment">//BLC</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Employee</span> {
            <span class="hl-type">int</span> employeeId;
            String employeeName;
            <span class="hl-type">double</span> employeeSalary;
            <span class="hl-type">char</span> employeeGrade;
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">setEmployeeData</span>(<span class="hl-type">int</span> id, String name, <span class="hl-type">double</span> salary) {
                employeeId = id;
                employeeName = name;
                employeeSalary = salary;
            }
            
            <span class="hl-keyword">public</span> String <span class="hl-method">getEmployeeData</span>() {
                <span class="hl-keyword">return</span> <span class="hl-string">"[Employee id is "</span>+employeeId+<span class="hl-string">", Name is :"</span>+employeeName+
                       <span class="hl-string">", Salary is :"</span>+employeeSalary+<span class="hl-string">", Grade is "</span>+employeeGrade+<span class="hl-string">"]"</span>;
            }
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">calculateGrade</span>() {
                <span class="hl-keyword">if</span>(employeeSalary &gt;= <span class="hl-number">75000</span>) {
                    employeeGrade = <span class="hl-string">'A'</span>;
                }
                <span class="hl-keyword">else</span> <span class="hl-keyword">if</span>(employeeSalary &gt;= <span class="hl-number">65000</span>) {
                    employeeGrade = <span class="hl-string">'B'</span>;
                }
                <span class="hl-keyword">else</span> <span class="hl-keyword">if</span>(employeeSalary &gt;= <span class="hl-number">50000</span>) {
                    employeeGrade = <span class="hl-string">'C'</span>;
                }
                <span class="hl-keyword">else</span> {
                    employeeGrade = <span class="hl-string">'D'</span>;
                }
            }
        }
      </code></pre>
    </div>

    <h3>ELC Class</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">Main.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.oop.elc;
        <span class="hl-keyword">import</span> com.oop.blc.Employee;
        <span class="hl-comment">//ELC</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Main</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Employee</span> emp = <span class="hl-keyword">new</span> <span class="hl-type">Employee</span>();
                emp.<span class="hl-method">setEmployeeData</span>(<span class="hl-number">101</span>, <span class="hl-string">"Scott"</span>, <span class="hl-number">80000</span>);
                emp.<span class="hl-method">calculateGrade</span>();
                <span class="hl-type">IO</span>.println(emp.<span class="hl-method">getEmployeeData</span>());
            }
        }
      </code></pre>
    </div>
  `
  },
  {
    id: 'constructor',
    title: 'Constructor',
    icon: 'fas fa-plus-square',
    category: 'OOP',
    content: `
      <h2>What is a Constructor?</h2>
      <p>If the name of the class and name of the method both are exactly same and it does not contain any return type then it is called Constructor.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Constructor.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Student</span> {
              <span class="hl-keyword">public</span> <span class="hl-type">Student</span>() {
                  <span class="hl-comment">// Constructor</span>
              }
          }
        </code></pre>
      </div>
      <h3>Default Constructor</h3>
      <p>As a programmer, If we don't write any type of constructor (In BLC OR ELC class) in the class then automatically Java compiler will add one default no-argument constructor to the class.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">DefaultConstructor.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// Before compilation</span>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Test</span> { }
          
          <span class="hl-comment">// After compilation</span>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Test</span> {
              <span class="hl-keyword">public</span> <span class="hl-type">Test</span>() {
                  <span class="hl-comment">// Added by Java compiler</span>
              }
          }
        </code></pre>
      </div>
      <p>The access modifier of default no-argument constructor (added by Java compiler) will depend upon class. If class is public then access modifier of no-argument constructor would also be public.</p>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>Every Java class must have <strong>at-least one constructor</strong> either explicitly written by user OR implicitly added by Java compiler. We can't think about a Java class without a constructor.</p>
        </div>
      </div>
      <h3>Why compiler automatically provides no-argument default constructor to our class?</h3>
      <p>If compiler will not supply default no-argument constructor then object creation is not possible in Java without the support of user-defined constructor. That means, the developer is responsible for providing an explicit constructor to support object creation.</p>
      <h3>Role of instance variable while creating the Object</h3>
      <p>Whenever we create an object in Java then a SEPARATE COPY of ALL the NON-STATIC FIELDS are created.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">InstanceVariables.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Test</span> {
              <span class="hl-type">int</span> x = <span class="hl-number">100</span>;
          }
          <span class="hl-type">Test</span> t1 = <span class="hl-keyword">new</span> <span class="hl-type">Test</span>();
          <span class="hl-type">Test</span> t2 = <span class="hl-keyword">new</span> <span class="hl-type">Test</span>();
          t1.x++;  <span class="hl-comment">// t1.x = 101</span>
          t2.x--;  <span class="hl-comment">// t2.x = 99</span>
        </code></pre>
      </div>
      <h3>Constructor Overloading</h3>
      <p>Java allows to write two or more than two constructors with the same class name but with different parameters.</p>
      <ul>
        <li>Number of Parameters</li>
        <li>Type of Parameters</li>
        <li>Order of Parameters (Sequence of data type)</li>
      </ul>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ConstructorOverload.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Box</span> {
              <span class="hl-keyword">public</span> <span class="hl-type">Box</span>() { }  <span class="hl-comment">// No-arg</span>
              <span class="hl-keyword">public</span> <span class="hl-type">Box</span>(<span class="hl-type">int</span> side) { }
              <span class="hl-keyword">public</span> <span class="hl-type">Box</span>(<span class="hl-type">int</span> l, <span class="hl-type">int</span> w, <span class="hl-type">int</span> h) { }
              <span class="hl-keyword">public</span> <span class="hl-type">Box</span>(<span class="hl-type">double</span> side) { }
          }
        </code></pre>
      </div>
      <h3>Modifiers on Constructor</h3>
      <p>Constructor can accept all types of access modifiers like private, protected, public and default.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">PrivateConstructor.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Single</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> Single instance = <span class="hl-keyword">null</span>;
              <span class="hl-keyword">private</span> <span class="hl-type">Single</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Constructor invoked"</span>);
              }
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> Single <span class="hl-method">getInstance</span>() {
                  <span class="hl-keyword">if</span>(instance == <span class="hl-keyword">null</span>) {
                      instance = <span class="hl-keyword">new</span> <span class="hl-type">Single</span>();
                  }
                  <span class="hl-keyword">return</span> instance;
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // THIS KEYWORD
  // ================================================================
  {
    id: 'this-keyword',
    title: 'This Keyword',
    icon: 'fas fa-hand-point-right',
    category: 'OOP',
    content: `
      <h2>This Keyword</h2>
      <p>This is a <strong>reference variable</strong> which is used to refer the <strong>current object</strong> that means inside the BLC class if we want to represent the current object properties (non-static field) OR object behaviour (non-static method) then we should use this keyword.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ThisKeywordDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Employee</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">int</span> id;
              <span class="hl-keyword">private</span> String name;
              
              <span class="hl-keyword">public</span> <span class="hl-type">Employee</span>(<span class="hl-type">int</span> id, String name) {
                  <span class="hl-keyword">this</span>.id = id;
                  <span class="hl-keyword">this</span>.name = name;
              }
          }
        </code></pre>
      </div>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>this keyword is used to represent non-static members so, we cannot use this keyword from static context like static method or static block.</p>
        </div>
      </div>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">In Java:</div>
          <p>Automatically Java compiler will add this keyword as a first parameter to all the non-static methods as well as constructor. (This is called as Hidden this keyword)</p>
        </div>
      </div>
      <h3>When variable name and method level variables are same (Variable Hiding)</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">VariableHiding.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Employee</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">int</span> id;
              <span class="hl-keyword">private</span> String name;
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">setEmployeeData</span>(<span class="hl-type">int</span> id, String name) {
                  <span class="hl-keyword">this</span>.id = id;  <span class="hl-comment">// left side is field, right side is parameter</span>
                  <span class="hl-keyword">this</span>.name = name;
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // GETTER & SETTER
  // ================================================================
  {
    id: 'getter-setter',
    title: 'Getter & Setter',
    icon: 'fas fa-edit',
    category: 'OOP',
    content: `
      <h2>What is Setter and Getter in Java</h2>
      <p><strong>Setter:</strong> A method which is used to modify the existing object data. It should have one parameter and return type must be void and it must contain only one parameter.</p>
      <p><strong>Getter:</strong> A method which is used to retrieve the existing object data. It should not contain any parameter. In order to read the private field value outside the BLC class we should use getter.</p>
      <p>Getter method return type will not be void, it will not take any parameter as well as it must be public with the same type as the instance variable.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">GetterSetter.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Employee</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">int</span> id;
              <span class="hl-keyword">private</span> String name;
              <span class="hl-keyword">private</span> <span class="hl-type">double</span> salary;
              
              <span class="hl-comment">// Setter</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">setId</span>(<span class="hl-type">int</span> id) {
                  <span class="hl-keyword">this</span>.id = id;
              }
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">setName</span>(String name) {
                  <span class="hl-keyword">this</span>.name = name;
              }
              
              <span class="hl-comment">// Getter</span>
              <span class="hl-keyword">public</span> <span class="hl-type">int</span> <span class="hl-method">getId</span>() {
                  <span class="hl-keyword">return</span> id;
              }
              <span class="hl-keyword">public</span> String <span class="hl-method">getName</span>() {
                  <span class="hl-keyword">return</span> name;
              }
              <span class="hl-keyword">public</span> <span class="hl-type">double</span> <span class="hl-method">getSalary</span>() {
                  <span class="hl-keyword">return</span> salary;
              }
          }
        </code></pre>
      </div>
      <h3>Final Conclusion</h3>
      <p><strong>Parameterized Constructor:</strong> To Initialize the Object properties (non-static field) with user values.<br>
      <strong>Setter:</strong> To Modify the existing object data. (Only one data at a time) OR Writing Operation.<br>
      <strong>Getter:</strong> To retrieve the existing object data of BLC class. (Read Operation)<br>
      <strong>toString():</strong> To Print Object properties (non-static field).</p>
    `
  },

  // ================================================================
  // ENCAPSULATION
  // ================================================================
  {
    id: 'encapsulation',
    title: 'Encapsulation',
    icon: 'fas fa-lock',
    category: 'OOP',
    content: `
      <h2>What is Encapsulation?</h2>
      <p>Encapsulation is the process of wrapping data (fields) and methods (code) into a single unit (class). It is also known as <strong>Data Hiding</strong>.</p>
      <p>To achieve Encapsulation:</p>
      <ol>
        <li>1) Declare all the data members with private access modifiers (Data Hiding OR Data Security)</li>
        <li>2) Write public methods to perform read (getter) and write (setter) operation on these private data like setter and getter.</li>
      </ol>
      <div class="info-box success">
        <i class="fas fa-check-circle"></i>
        <div>
          <div class="info-title">Tightly Encapsulated Class:</div>
          <p>If we declare all our data with private access modifier then it is called <strong>TIGHTLY ENCAPSULATED CLASS</strong>. On the other hand, if we declare our data other than private access modifier then it is called <strong>Loosely Encapsulated class</strong>.</p>
        </div>
      </div>
      <h3>Example with Validation</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">EncapsulationDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Employee</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">int</span> id;
              <span class="hl-keyword">private</span> String name;
              <span class="hl-keyword">private</span> <span class="hl-type">double</span> salary;
              
              <span class="hl-keyword">public</span> <span class="hl-type">Employee</span>(<span class="hl-type">int</span> id, String name, <span class="hl-type">double</span> salary) {
                  <span class="hl-keyword">if</span>(id &lt;= <span class="hl-number">0</span>) {
                      <span class="hl-type">System</span>.err.println(<span class="hl-string">"Id cannot be zero OR Negative"</span>);
                      <span class="hl-type">System</span>.exit(<span class="hl-number">0</span>);
                  }
                  <span class="hl-keyword">if</span>(name == <span class="hl-keyword">null</span> || name.<span class="hl-method">isBlank</span>() || name.<span class="hl-method">equals</span>(<span class="hl-string">"null"</span>)) {
                      <span class="hl-type">System</span>.err.println(<span class="hl-string">"Name cannot be empty OR Blank"</span>);
                      <span class="hl-type">System</span>.exit(<span class="hl-number">0</span>);
                  }
                  <span class="hl-keyword">if</span>(salary &lt;= <span class="hl-number">0</span>) {
                      <span class="hl-type">System</span>.err.println(<span class="hl-string">"Salary cannot be 0 OR Negative"</span>);
                      <span class="hl-type">System</span>.exit(<span class="hl-number">0</span>);
                  }
                  <span class="hl-keyword">this</span>.id = id;
                  <span class="hl-keyword">this</span>.name = name;
                  <span class="hl-keyword">this</span>.salary = salary;
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // STATIC FACTORY METHOD
  // ================================================================
  {
    id: 'static-factory-method',
    title: 'Static Factory Method',
    icon: 'fas fa-industry',
    category: 'OOP',
    content: `
      <h2>Static Factory Method</h2>
      <p>A static factory method is used to create objects with better naming and flexibility. It is a static method that returns an instance of the class.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StaticFactoryMethod.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Book</span> {
              <span class="hl-keyword">private</span> String title;
              <span class="hl-keyword">private</span> String author;
              
              <span class="hl-keyword">private</span> <span class="hl-type">Book</span>(String title, String author) {
                  <span class="hl-keyword">this</span>.title = title;
                  <span class="hl-keyword">this</span>.author = author;
              }
              
              <span class="hl-comment">// Static factory method</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-type">Book</span> <span class="hl-method">getBookObject</span>(String title, String author) {
                  <span class="hl-keyword">return</span> <span class="hl-keyword">new</span> <span class="hl-type">Book</span>(title, author);
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">greet</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Thank You for choosing this book"</span>);
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // GARBAGE COLLECTOR
  // ================================================================
  {
    id: 'garbage-collection',
    title: 'Garbage Collector',
    icon: 'fas fa-recycle',
    category: 'Advanced Java',
    content: `
      <h2>Garbage Collector</h2>
      <p>It is an automatic memory management technique in Java. In Java, Programmer is only responsible to allocate the memory, Memory de-allocation is automatically performed by JVM.</p>
      <p>Garbage Collector is a <strong>daemon thread</strong> which is responsible to delete the un-used objects from the HEAP MEMORY. Only those objects which <strong>DO NOT CONTAIN ANY REFERENCES</strong> are eligible for Garbage Collection.</p>
      <h3>Ways to Make Objects Eligible for GC</h3>
      <ol>
        <li><strong>1) Assigning null literal to an existing reference variable:</strong><br>
            <code>Employee emp = new Employee(101, "Scott");<br>emp = null;</code>
        </li>
        <li><strong>2) Creating an object inside the method (local variable):</strong><br>
            <code>void createObject() { Student s = new Student(); }</code>
        </li>
        <li><strong>3) Assigning a new object to the existing reference variable:</strong><br>
            <code>Product p1 = new Product(101, "Camera");<br>p1 = new Product(202, "Laptop");</code>
        </li>
      </ol>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">GCDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">GCDemo</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                  Employee emp = <span class="hl-keyword">new</span> <span class="hl-type">Employee</span>(<span class="hl-number">101</span>, <span class="hl-string">"Scott"</span>);
                  emp = <span class="hl-keyword">null</span>;  <span class="hl-comment">// eligible for GC</span>
                  
                  <span class="hl-method">createObject</span>();
                  
                  System.gc();  <span class="hl-comment">// Request GC explicitly</span>
              }
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">createObject</span>() {
                  Student s = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>();  <span class="hl-comment">// eligible after method ends</span>
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // INHERITANCE
  // ================================================================
  {
    id: 'inheritance',
    title: 'Inheritance',
    icon: 'fas fa-sitemap',
    category: 'OOP',
    content: `
      <h2>What is Inheritance?</h2>
      <p>Deriving the new class from the existing class in such a way that new class will acquire all the properties and features (except private) from existing class is called Inheritance.</p>
      <ul>
        <li>It is one of the most important feature of OOP which provides <strong>Code Reusability</strong>.</li>
        <li>In inheritance mechanism, the relationship between the classes would be Parent and Child. According to Java, Parent class is called <strong>super class</strong> and child class is called <strong>sub class</strong>.</li>
        <li>We can use inheritance between two classes using <strong>extends keyword</strong>.</li>
        <li>By using Inheritance, A sub class need not to start the process from beginning onwards.</li>
      </ul>
      <p><strong>Types of Inheritance:</strong></p>
      <ol>
        <li>1) Single-level Inheritance</li>
        <li>2) Multilevel Inheritance</li>
        <li>3) Hierarchical Inheritance</li>
        <li>4) Multiple Inheritance (Not supported using java classes)</li>
        <li>5) Hybrid Inheritance</li>
      </ol>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SingleLevelInheritance.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Animal</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">eat</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Animal is eating"</span>);
              }
          }
          
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Dog</span> <span class="hl-keyword">extends</span> <span class="hl-type">Animal</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">bark</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Dog is barking"</span>);
              }
          }
        </code></pre>
      </div>
      <h2>Super Keyword</h2>
      <p>Super is a predefined keyword which is used to refer the <strong>direct parent class (super class) object</strong>.</p>
      <ul>
        <li>1) To access the super class non-static field [Variable Hiding]</li>
        <li>2) To access the super class non-static method [Method Overriding]</li>
        <li>3) To access the constructor of super class [Constructor Chaining]</li>
      </ul>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SuperKeyword.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Vehicle</span> {
              <span class="hl-type">int</span> maxSpeed = <span class="hl-number">120</span>;
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">show</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Vehicle show"</span>);
              }
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Car</span> <span class="hl-keyword">extends</span> <span class="hl-type">Vehicle</span> {
              <span class="hl-type">int</span> maxSpeed = <span class="hl-number">180</span>;
              
              <span class="hl-keyword">void</span> <span class="hl-method">display</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Car maxSpeed: "</span> + maxSpeed);      <span class="hl-comment">// 180</span>
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Vehicle maxSpeed: "</span> + <span class="hl-keyword">super</span>.maxSpeed);  <span class="hl-comment">// 120</span>
                  <span class="hl-keyword">super</span>.<span class="hl-method">show</span>();  <span class="hl-comment">// calling parent method</span>
              }
          }
        </code></pre>
      </div>
      <h3>Constructor Chaining</h3>
      <p>When we create an object of the sub class, automatically the constructor of the sub class will call the constructor of its super class and so on.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ConstructorChaining.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Parent</span> {
              <span class="hl-keyword">public</span> <span class="hl-type">Parent</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Parent constructor"</span>);
              }
          }
          <span class="hl-keyword">class</span> <span class="hl-type">Child</span> <span class="hl-keyword">extends</span> <span class="hl-type">Parent</span> {
              <span class="hl-keyword">public</span> <span class="hl-type">Child</span>() {
                  <span class="hl-keyword">super</span>();
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Child constructor"</span>);
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // POLYMORPHISM
  // ================================================================
  {
    id: 'polymorphism',
    title: 'Polymorphism',
    icon: 'fas fa-shapes',
    category: 'OOP',
    content: `
      <h2>What is Polymorphism?</h2>
      <p>Polymorphism means "many forms". It allows us to perform a single action in different ways.</p>
      <h3>Types of Polymorphism</h3>
      <ol>
        <li><strong>1. Static Polymorphism (Compile-time):</strong>
          <ul>
            <li>Method Overloading</li>
            <li>Method Hiding</li>
          </ul>
          <p>The polymorphism which exists at the time of compilation is called static polymorphism. Here Java compiler will select the appropriate method based on the method parameter. The binding of the method is done at the time of compilation so, it is known as <strong>Early binding</strong>.</p>
        </li>
        <li><strong>2. Dynamic Polymorphism (Runtime):</strong>
          <ul>
            <li>Method Overriding</li>
          </ul>
          <p>The polymorphism which exists at the time of execution is called Runtime polymorphism. Here Java compiler does not have any idea regarding method call Or execution, At runtime JVM will decide to invoke the method based on class Object type. The binding of the method is done at the time of execution so, it is known as <strong>Late binding</strong>.</p>
        </li>
      </ol>
      <h2>Method Overloading (Static Polymorphism)</h2>
      <p>Allows us to write two or more methods in the same class such that they differ in their parameter list but names are same.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Overloading.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Calculator</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">add</span>(<span class="hl-type">int</span> a, <span class="hl-type">int</span> b) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Sum of two integers is: "</span> + (a+b));
              }
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">add</span>(<span class="hl-type">double</span> a, <span class="hl-type">double</span> b) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Sum of two doubles is: "</span> + (a+b));
              }
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">add</span>(String a, String b) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Concat of two Strings is: "</span> + (a+b));
              }
          }
        </code></pre>
      </div>
      <h2>Method Overriding (Dynamic Polymorphism)</h2>
      <p>Overriding allows us to implement (re-define) a method which is already defined in the super class.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Overriding.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Animal</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">sound</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Animal makes sound"</span>);
              }
          }
          <span class="hl-keyword">class</span> <span class="hl-type">Dog</span> <span class="hl-keyword">extends</span> <span class="hl-type">Animal</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">sound</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Dog barks"</span>);
              }
          }
          <span class="hl-keyword">class</span> <span class="hl-type">Cat</span> <span class="hl-keyword">extends</span> <span class="hl-type">Animal</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">sound</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Cat meows"</span>);
              }
          }
          <span class="hl-comment">// Main</span>
          Animal a = <span class="hl-keyword">new</span> <span class="hl-type">Dog</span>();
          a.<span class="hl-method">sound</span>();  <span class="hl-comment">// Output: Dog barks</span>
        </code></pre>
      </div>
      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Rules of Overriding:</div>
          <p>1. Method name must be same.<br>
          2. Parameter must be same.<br>
          3. Must have "IS-A" relationship (Inheritance).<br>
          4. Accessibility modifier cannot reduce the visibility.<br>
          5. Return type must be compatible (covariant).</p>
        </div>
      </div>
    `
  },

  // ================================================================
  // FINAL KEYWORD
  // ================================================================
  {
    id: 'final-keyword',
    title: 'Final Keyword',
    icon: 'fas fa-ban',
    category: 'OOP',
    content: `
      <h2>Final Keyword in Java</h2>
      <p>It is used to provide some kind of <strong>restriction</strong> in our program. We can use final keyword in 3 ways in java:</p>
      <ol>
        <li>1) To declare a <strong>class</strong> as a final (Inheritance is not possible)</li>
        <li>2) To declare a <strong>method</strong> as a final (Overriding is not possible)</li>
        <li>3) To declare a <strong>variable (Field)</strong> as a final (Re-assignment is not possible)</li>
      </ol>
      <h3>1. Final Class</h3>
      <p>Whenever we declare a class as a final class then we can't extend or inherit that class otherwise we will get a compilation error.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">FinalClass.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">final</span> <span class="hl-keyword">class</span> <span class="hl-type">A</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">int</span> x = <span class="hl-number">100</span>;
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">setData</span>(<span class="hl-type">int</span> x) {
                  <span class="hl-keyword">this</span>.x = x;
              }
          }
          <span class="hl-comment">// class B extends A { } // ERROR</span>
        </code></pre>
      </div>
      <h3>2. Final Method</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">FinalMethod.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">A</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">final</span> <span class="hl-keyword">void</span> <span class="hl-method">m1</span>() { }
          }
          <span class="hl-keyword">class</span> <span class="hl-type">B</span> <span class="hl-keyword">extends</span> <span class="hl-type">A</span> {
              <span class="hl-comment">// public void m1() { } // ERROR</span>
          }
        </code></pre>
      </div>
      <h3>3. Final Variable</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">FinalVariable.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">final</span> <span class="hl-type">int</span> MAX_VALUE = <span class="hl-number">100</span>;
          <span class="hl-comment">// MAX_VALUE = 200; // ERROR</span>
        </code></pre>
      </div>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>In Java, String and All wrapper classes are declared as <strong>final class</strong>.</p>
        </div>
      </div>
    `
  },

  // ================================================================
  // ABSTRACT CLASS & INTERFACE
  // ================================================================
  {
    id: 'abstract-class-interface',
    title: 'Abstract Class & Interface',
    icon: 'fas fa-layer-group',
    category: 'OOP',
    content: `
      <h2>Abstraction in Java</h2>
      <p>Abstraction means hiding the implementation details and showing only the essential features to the user.</p>
      <p>In Java, abstraction is achieved through:</p>
      <ol>
        <li><strong>1. Abstract class and abstract method:</strong> [0 to 100% abstraction i.e. Partial Abstraction]</li>
        <li><strong>2. Interface:</strong> [100% abstraction i.e. Full Abstraction]</li>
      </ol>
      <h2>What is an Abstract Method?</h2>
      <p>An abstract method is a common method which does not contain method body OR method implementation so, basically it is an un-implemented method.</p>
      <p>It must contain <strong>abstract keyword</strong>, does not contain method body and there will be a <strong>terminator</strong> at the end.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">AbstractMethod.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">abstract</span> <span class="hl-keyword">class</span> <span class="hl-type">Payment</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">abstract</span> <span class="hl-keyword">void</span> <span class="hl-method">makePayment</span>();
          }
          <span class="hl-keyword">class</span> <span class="hl-type">UPI</span> <span class="hl-keyword">extends</span> <span class="hl-type">Payment</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">makePayment</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"UPI Payment"</span>);
              }
          }
        </code></pre>
      </div>
      <h2>Interface</h2>
      <p>An interface is a keyword in Java which is similar to a class which defines "working functionality of a class".</p>
      <ul>
        <li>Up to JDK 1.7 an interface contains only abstract methods.</li>
        <li>From Java 8 onwards we have a facility to write <strong>default and static methods</strong>.</li>
        <li>By using interface, we can achieve <strong>100% abstraction</strong>.</li>
        <li>All the methods declared inside an interface is by default <strong>public and abstract</strong>.</li>
        <li>All the variables declared inside an interface is by default <strong>public, static and final</strong>.</li>
        <li>We can't create an object for interface, but reference can be created.</li>
        <li>By using interface, we can achieve <strong>multiple inheritance</strong> in java.</li>
      </ul>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">InterfaceDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">interface</span> <span class="hl-type">Moveable</span> {
              <span class="hl-type">int</span> SPEED = <span class="hl-number">90</span>;
              <span class="hl-keyword">void</span> <span class="hl-method">move</span>();
          }
          <span class="hl-keyword">class</span> <span class="hl-type">Car</span> <span class="hl-keyword">implements</span> <span class="hl-type">Moveable</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">move</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Car is moving with "</span> + SPEED + <span class="hl-string">" KM / HR"</span>);
              }
          }
        </code></pre>
      </div>
    `
  },
  // ================================================================
  // STRING CLASS
  // ================================================================
  {
    id: 'string-class',
    title: 'String Class',
    icon: 'fas fa-font',
    category: 'Core Java Basics',
    content: `
      <h2>String in Java</h2>
      <p>String is a sequence of characters. In Java, String is a <strong>class</strong> and all strings are objects of this class. Strings are <strong>immutable</strong>.</p>
      <h3>Creating Strings</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StringCreation.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// Using string literal (goes to String pool)</span>
          String s1 = <span class="hl-string">"Hello"</span>;
          
          <span class="hl-comment">// Using new keyword (goes to heap)</span>
          String s2 = <span class="hl-keyword">new</span> <span class="hl-type">String</span>(<span class="hl-string">"Hello"</span>);
        </code></pre>
      </div>
      <h3>Important String Methods</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StringMethods.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          String name = <span class="hl-string">"Java"</span>;
          
          <span class="hl-comment">// length()</span>
          <span class="hl-type">int</span> len = name.<span class="hl-method">length</span>();  <span class="hl-comment">// 4</span>
          
          <span class="hl-comment">// charAt(int index)</span>
          <span class="hl-type">char</span> ch = name.<span class="hl-method">charAt</span>(<span class="hl-number">0</span>);  <span class="hl-comment">// 'J'</span>
          
          <span class="hl-comment">// equals() - content comparison</span>
          <span class="hl-keyword">if</span>(name.<span class="hl-method">equals</span>(<span class="hl-string">"Java"</span>)) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Both are equal"</span>);
          }
          
          <span class="hl-comment">// equalsIgnoreCase()</span>
          <span class="hl-keyword">if</span>(name.<span class="hl-method">equalsIgnoreCase</span>(<span class="hl-string">"JAVA"</span>)) {
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Equal ignoring case"</span>);
          }
          
          <span class="hl-comment">// substring()</span>
          String sub = name.<span class="hl-method">substring</span>(<span class="hl-number">1</span>);  <span class="hl-comment">// "ava"</span>
          
          <span class="hl-comment">// toUpperCase() / toLowerCase()</span>
          String upper = name.<span class="hl-method">toUpperCase</span>();  <span class="hl-comment">// "JAVA"</span>
          
          <span class="hl-comment">// concat()</span>
          String full = name.<span class="hl-method">concat</span>(<span class="hl-string">" Program"</span>);  <span class="hl-comment">// "Java Program"</span>
          
          <span class="hl-comment">// contains()</span>
          <span class="hl-keyword">boolean</span> has = name.<span class="hl-method">contains</span>(<span class="hl-string">"av"</span>);  <span class="hl-comment">// true</span>
          
          <span class="hl-comment">// replace()</span>
          String replaced = name.<span class="hl-method">replace</span>(<span class="hl-string">'a'</span>, <span class="hl-string">'o'</span>);  <span class="hl-comment">// "Jovo"</span>
          
          <span class="hl-comment">// trim()</span>
          String trimmed = <span class="hl-string">"  Java  "</span>.<span class="hl-method">trim</span>();  <span class="hl-comment">// "Java"</span>
          
          <span class="hl-comment">// split()</span>
          String[] parts = <span class="hl-string">"Java,Python,C++"</span>.<span class="hl-method">split</span>(<span class="hl-string">","</span>);
        </code></pre>
      </div>
      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">Important:</div>
          <p>Never compare String objects by using == operator. Use .equals() method instead.</p>
        </div>
      </div>
    `
  },

  // ================================================================
  // ONE-DIMENSIONAL ARRAYS
  // ================================================================
  {
    id: 'arrays-1d',
    title: 'One-Dimensional Arrays',
    icon: 'fas fa-th',
    category: 'Arrays',
    content: `
      <h2>One-Dimensional Arrays</h2>
      <p>An array is a container object that holds a fixed number of values of a single type.</p>
      <h3>Declaration & Initialization</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ArrayDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span>[] arr = <span class="hl-keyword">new</span> <span class="hl-type">int</span>[<span class="hl-number">5</span>];
          <span class="hl-type">int</span>[] arr2 = {<span class="hl-number">10</span>, <span class="hl-number">20</span>, <span class="hl-number">30</span>};
          <span class="hl-comment">// Access</span>
          <span class="hl-type">System</span>.out.println(arr[<span class="hl-number">0</span>]);
          <span class="hl-comment">// Iterate</span>
          <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i=<span class="hl-number">0</span>; i&lt;arr.length; i++) { ... }
          <span class="hl-keyword">for</span>(<span class="hl-type">int</span> num : arr2) { ... }
        </code></pre>
      </div>
      <h3>Array of Objects</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StudentArray.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          Student[] students = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>[<span class="hl-number">3</span>];
          students[<span class="hl-number">0</span>] = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>(<span class="hl-number">101</span>, <span class="hl-string">"Scott"</span>);
        </code></pre>
      </div>
      <h3>Characteristics of an Array</h3>
      <ul>
        <li>All elements must be of the same data type.</li>
        <li>Array size is fixed after creation.</li>
        <li>Arrays are objects in Java.</li>
        <li>Index starts from 0.</li>
      </ul>
    `
  },

  // ================================================================
  // TWO-DIMENSIONAL ARRAYS
  // ================================================================
  {
    id: 'arrays-2d',
    title: 'Two-Dimensional Arrays',
    icon: 'fas fa-table',
    category: 'Arrays',
    content: `
      <h2>Two-Dimensional Arrays</h2>
      <p>Array of arrays. Declaration:</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">TwoDArray.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span>[][] matrix = <span class="hl-keyword">new</span> <span class="hl-type">int</span>[<span class="hl-number">3</span>][<span class="hl-number">3</span>];
          <span class="hl-type">int</span>[][] grid = {{<span class="hl-number">1</span>,<span class="hl-number">2</span>}, {<span class="hl-number">3</span>,<span class="hl-number">4</span>}};
          <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i=<span class="hl-number">0</span>; i&lt;grid.length; i++) {
              <span class="hl-keyword">for</span>(<span class="hl-type">int</span> j=<span class="hl-number">0</span>; j&lt;grid[i].length; j++) {
                  <span class="hl-type">System</span>.out.print(grid[i][j] + <span class="hl-string">" "</span>);
              }
              <span class="hl-type">System</span>.out.println();
          }
        </code></pre>
      </div>
      <h3>Jagged Arrays</h3>
      <p>Each row may have different length.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">JaggedArray.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">int</span>[][] jagged = <span class="hl-keyword">new</span> <span class="hl-type">int</span>[<span class="hl-number">3</span>][];
          jagged[<span class="hl-number">0</span>] = <span class="hl-keyword">new</span> <span class="hl-type">int</span>[<span class="hl-number">2</span>];
          jagged[<span class="hl-number">1</span>] = <span class="hl-keyword">new</span> <span class="hl-type">int</span>[<span class="hl-number">3</span>];
          jagged[<span class="hl-number">2</span>] = <span class="hl-keyword">new</span> <span class="hl-type">int</span>[<span class="hl-number">1</span>];
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // EXCEPTION HANDLING
  // ================================================================
  {
    id: 'exceptions-complete',
    title: 'Exception Handling',
    icon: 'fas fa-exclamation-circle',
    category: 'Exceptions Handling',
    content: `
      <h2>Exception Handling in Java</h2>
      <p>Exception is an abnormal condition that disrupts the normal flow of execution.</p>
      
      <h3>What is an Exception?</h3>
      <p>An exception is an event that occurs during the execution of a program and disrupts the normal flow of instructions.</p>
      <p>Examples: ArithmeticException (divide by zero), ArrayIndexOutOfBoundsException (accessing invalid index), NumberFormatException (invalid number format).</p>

      <h3>Exception Hierarchy</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Exception Hierarchy</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          java.lang.Object
            └── java.lang.Throwable
                ├── java.lang.Error
                │   ├── OutOfMemoryError
                │   ├── StackOverflowError
                │   └── ...
                └── java.lang.Exception
                    ├── java.lang.RuntimeException (Unchecked)
                    │   ├── ArithmeticException
                    │   ├── NullPointerException
                    │   ├── ArrayIndexOutOfBoundsException
                    │   ├── NumberFormatException
                    │   └── ...
                    └── Checked Exceptions
                        ├── IOException
                        ├── SQLException
                        ├── ClassNotFoundException
                        └── ...
        </code></pre>
      </div>

      <h3>Types of Exceptions</h3>
      <ul>
        <li><strong>Checked Exceptions:</strong> Checked at compile-time. Must be handled or declared (e.g., IOException, SQLException).</li>
        <li><strong>Unchecked Exceptions (Runtime Exceptions):</strong> Occur at runtime. Not forced to handle (e.g., ArithmeticException, NullPointerException).</li>
        <li><strong>Errors:</strong> Serious problems that applications should not try to catch (e.g., OutOfMemoryError, StackOverflowError).</li>
      </ul>

      <h3>Exception Handling Keywords</h3>
      <ul>
        <li><strong>try:</strong> Contains code that might throw an exception.</li>
        <li><strong>catch:</strong> Handles the exception.</li>
        <li><strong>finally:</strong> Always executes regardless of exception.</li>
        <li><strong>throw:</strong> Explicitly throws an exception.</li>
        <li><strong>throws:</strong> Declares that a method might throw exceptions.</li>
      </ul>

      <h3>1. try-catch Block</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">TryCatchDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-type">int</span> result = <span class="hl-number">10</span> / <span class="hl-number">0</span>;  <span class="hl-comment">// ArithmeticException</span>
              <span class="hl-type">System</span>.out.println(result);
          } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Cannot divide by zero: "</span> + e.<span class="hl-method">getMessage</span>());
          }
        </code></pre>
      </div>

      <h3>2. try-catch-finally Block</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">TryCatchFinally.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-type">int</span> result = <span class="hl-number">10</span> / <span class="hl-number">0</span>;
          } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Exception caught"</span>);
          } <span class="hl-keyword">finally</span> {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Finally block always executes"</span>);
          }
        </code></pre>
      </div>

      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">When finally block will NOT execute:</div>
          <p>1. If we write System.exit(0) and this statement is executed inside the try block.<br>
          2. If we write any infinite loop inside try block.</p>
        </div>
      </div>

      <h3>3. Multiple catch Blocks</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MultipleCatch.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              String str = <span class="hl-keyword">null</span>;
              <span class="hl-type">System</span>.out.println(str.<span class="hl-method">length</span>());  <span class="hl-comment">// NullPointerException</span>
              <span class="hl-type">int</span>[] arr = <span class="hl-keyword">new</span> <span class="hl-type">int</span>[<span class="hl-number">5</span>];
              <span class="hl-type">System</span>.out.println(arr[<span class="hl-number">10</span>]);  <span class="hl-comment">// ArrayIndexOutOfBounds</span>
          } <span class="hl-keyword">catch</span>(<span class="hl-type">NullPointerException</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Null pointer exception"</span>);
          } <span class="hl-keyword">catch</span>(<span class="hl-type">ArrayIndexOutOfBoundsException</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Array index out of bounds"</span>);
          } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"General exception"</span>);
          }
        </code></pre>
      </div>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Important:</div>
          <p>If there is a hierarchy of exceptions, the catch block for the parent class should come <strong>AFTER</strong> the catch block for the child class.</p>
        </div>
      </div>

      <h3>4. Checked vs Unchecked Exceptions</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">CheckedUncheckedDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// Checked Exception (must handle or declare)</span>
          <span class="hl-keyword">try</span> {
              <span class="hl-type">FileReader</span> fr = <span class="hl-keyword">new</span> <span class="hl-type">FileReader</span>(<span class="hl-string">"test.txt"</span>);  <span class="hl-comment">// IOException</span>
          } <span class="hl-keyword">catch</span>(<span class="hl-type">IOException</span> e) {
              e.<span class="hl-method">printStackTrace</span>();
          }
          
          <span class="hl-comment">// Unchecked Exception (runtime)</span>
          <span class="hl-type">int</span> result = <span class="hl-number">10</span> / <span class="hl-number">0</span>;  <span class="hl-comment">// ArithmeticException</span>
        </code></pre>
      </div>

      <h3>5. throw Keyword</h3>
      <p>Used to explicitly throw an exception.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ThrowDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">validateAge</span>(<span class="hl-type">int</span> age) {
              <span class="hl-keyword">if</span>(age &lt; <span class="hl-number">18</span>) {
                  <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">IllegalArgumentException</span>(<span class="hl-string">"Age must be 18+"</span>);
              }
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Valid age"</span>);
          }
        </code></pre>
      </div>

      <h3>6. throws Keyword</h3>
      <p>Used to declare that a method may throw exceptions.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ThrowsDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">readFile</span>() <span class="hl-keyword">throws</span> <span class="hl-type">IOException</span> {
              <span class="hl-type">FileReader</span> fr = <span class="hl-keyword">new</span> <span class="hl-type">FileReader</span>(<span class="hl-string">"test.txt"</span>);
          }
          
          <span class="hl-comment">// Caller must handle or declare</span>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-keyword">try</span> {
                  <span class="hl-method">readFile</span>();
              } <span class="hl-keyword">catch</span>(<span class="hl-type">IOException</span> e) {
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"File not found"</span>);
              }
          }
        </code></pre>
      </div>

      <h3>7. Custom Exceptions</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">CustomException.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// Checked custom exception</span>
          <span class="hl-keyword">class</span> <span class="hl-type">InvalidAgeException</span> <span class="hl-keyword">extends</span> <span class="hl-type">Exception</span> {
              <span class="hl-type">InvalidAgeException</span>(String msg) {
                  <span class="hl-keyword">super</span>(msg);
              }
          }
          
          <span class="hl-comment">// Usage</span>
          <span class="hl-keyword">void</span> <span class="hl-method">validate</span>(<span class="hl-type">int</span> age) <span class="hl-keyword">throws</span> <span class="hl-type">InvalidAgeException</span> {
              <span class="hl-keyword">if</span>(age &lt; <span class="hl-number">18</span>) {
                  <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">InvalidAgeException</span>(<span class="hl-string">"Not eligible"</span>);
              }
          }
          
          <span class="hl-comment">// Unchecked custom exception</span>
          <span class="hl-keyword">class</span> <span class="hl-type">InvalidInputException</span> <span class="hl-keyword">extends</span> <span class="hl-type">RuntimeException</span> {
              <span class="hl-type">InvalidInputException</span>(String msg) {
                  <span class="hl-keyword">super</span>(msg);
              }
          }
        </code></pre>
      </div>

      <h3>8. Try-with-resources (AutoCloseable)</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">TryWithResources.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> (<span class="hl-type">FileReader</span> fr = <span class="hl-keyword">new</span> <span class="hl-type">FileReader</span>(<span class="hl-string">"test.txt"</span>);
               <span class="hl-type">BufferedReader</span> br = <span class="hl-keyword">new</span> <span class="hl-type">BufferedReader</span>(fr)) {
              String line = br.<span class="hl-method">readLine</span>();
              <span class="hl-type">System</span>.out.println(line);
          } <span class="hl-keyword">catch</span>(<span class="hl-type">IOException</span> e) {
              e.<span class="hl-method">printStackTrace</span>();
          }
          <span class="hl-comment">// Resources are automatically closed</span>
        </code></pre>
      </div>

      <h3>9. Exception Handling Best Practices</h3>
      <ul>
        <li>Use specific exceptions, not generic Exception.</li>
        <li>Don't ignore exceptions (empty catch block).</li>
        <li>Log exceptions properly.</li>
        <li>Use try-with-resources for I/O operations.</li>
        <li>Throw early, catch late.</li>
        <li>Create custom exceptions for domain-specific errors.</li>
      </ul>

      <h3>10. Common Runtime Exceptions</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Exception</th><th>When it occurs</th></tr>
          <tr><td>ArithmeticException</td><td>Dividing by zero</td></tr>
          <tr><td>NullPointerException</td><td>Accessing null object</td></tr>
          <tr><td>ArrayIndexOutOfBoundsException</td><td>Accessing invalid array index</td></tr>
          <tr><td>StringIndexOutOfBoundsException</td><td>Accessing invalid string index</td></tr>
          <tr><td>NumberFormatException</td><td>Invalid number conversion</td></tr>
          <tr><td>ClassCastException</td><td>Invalid type casting</td></tr>
        </table>
      </div>

      <h3>11. Frequently Asked Questions</h3>
      <ul>
        <li><strong>Can we catch multiple exceptions in a single catch block?</strong><br>Yes, using multi-catch (Java 7+): <code>catch (IOException | SQLException e) { ... }</code></li>
        <li><strong>Is it possible to have try block without catch block?</strong><br>Yes, try with finally is allowed.</li>
        <li><strong>Can we have a finally block without catch?</strong><br>Yes, but not without try.</li>
        <li><strong>Can we rethrow an exception?</strong><br>Yes, <code>throw e;</code> inside catch block.</li>
      </ul>
    `
  },

  // ================================================================
  // RULES OF EXCEPTION HANDLING (Complete with all rules from PDFs)
  // ================================================================
  {
    id: 'rules-of-exception-handling',
    title: 'Rules of Exception Handling',
    icon: 'fas fa-gavel',
    category: 'Exceptions Handling',
    content: `
      <h2>Rules of Exception Handling</h2>
      <p>Following are the rules that must be followed while working with exception handling in Java:</p>

      <hr>

      <h3>Rule 1: Try block must be followed by either catch or finally block</h3>
      <p>A try block cannot exist alone. It must be followed by either a catch block or a finally block (or both).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule1.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-comment">// code</span>
          } <span class="hl-keyword">catch</span>(Exception e) {
              <span class="hl-comment">// code</span>
          }
        </code></pre>
      </div>
      <p>Valid: try must have catch or finally.</p>

      <h3>Rule 2: Multiple catch blocks allowed, but order matters</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule2.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-comment">// code</span>
          } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
              <span class="hl-comment">// code</span>
          } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
              <span class="hl-comment">// code</span>
          }
        </code></pre>
      </div>
      <p>Exception catch block must be last.</p>

      <h3>Rule 3: Only one catch block executes for a single exception</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule3.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-type">int</span> result = <span class="hl-number">10</span> / <span class="hl-number">0</span>;
          } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"ArithmeticException caught"</span>);
          } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Exception caught"</span>);
          }
        </code></pre>
      </div>
      <p>Output: ArithmeticException caught</p>

      <h3>Rule 4: Finally block always executes except special cases</h3>
      <div class="info-box warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <div class="info-title">When finally does NOT execute:</div>
          <p>1. If System.exit(0) is called inside the try block.<br>
          2. If there is an infinite loop inside the try block.</p>
        </div>
      </div>

      <h3>Rule 5: Only one finally block allowed</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule5.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-comment">// code</span>
          } <span class="hl-keyword">finally</span> {
              <span class="hl-comment">// code</span>
          }
        </code></pre>
      </div>
      <p>Multiple finally blocks not allowed.</p>

      <h3>Rule 6: Nested try-catch is allowed</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule6.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-keyword">try</span> {
                  <span class="hl-type">int</span> result = <span class="hl-number">10</span> / <span class="hl-number">0</span>;
              } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"Inner catch"</span>);
              }
          } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Outer catch"</span>);
          }
        </code></pre>
      </div>

      <h3>Rule 7: throw keyword used only inside methods</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule7.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">validateAge</span>(<span class="hl-type">int</span> age) {
              <span class="hl-keyword">if</span>(age &lt; <span class="hl-number">18</span>) {
                  <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">IllegalArgumentException</span>(<span class="hl-string">"Age must be 18+"</span>);
              }
          }
        </code></pre>
      </div>

      <h3>Rule 8: Multi-catch (Java 7+)</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule8.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-comment">// code</span>
          } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> | <span class="hl-type">NullPointerException</span> e) {
              <span class="hl-type">System</span>.out.println(<span class="hl-string">"Caught exception"</span>);
          }
        </code></pre>
      </div>

      <h3>Rule 9: Checked exceptions must be handled or declared</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule9.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">readFile</span>() <span class="hl-keyword">throws</span> <span class="hl-type">IOException</span> {
              <span class="hl-type">FileReader</span> fr = <span class="hl-keyword">new</span> <span class="hl-type">FileReader</span>(<span class="hl-string">"test.txt"</span>);
          }
        </code></pre>
      </div>

      <h3>Rule 10: Custom exceptions extend Exception or RuntimeException</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule10.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">InvalidAgeException</span> <span class="hl-keyword">extends</span> <span class="hl-type">Exception</span> {
              <span class="hl-type">InvalidAgeException</span>(String msg) {
                  <span class="hl-keyword">super</span>(msg);
              }
          }
        </code></pre>
      </div>

      <h3>Rule 11: Try-with-resources</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule11.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> (<span class="hl-type">FileReader</span> fr = <span class="hl-keyword">new</span> <span class="hl-type">FileReader</span>(<span class="hl-string">"test.txt"</span>)) {
              <span class="hl-comment">// code</span>
          } <span class="hl-keyword">catch</span>(<span class="hl-type">IOException</span> e) {
              e.<span class="hl-method">printStackTrace</span>();
          }
        </code></pre>
      </div>

      <h3>Rule 12: Exception object has useful methods</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Rule12.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-type">int</span> result = <span class="hl-number">10</span> / <span class="hl-number">0</span>;
          } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
              <span class="hl-type">System</span>.out.println(e.<span class="hl-method">getMessage</span>());
              <span class="hl-type">System</span>.out.println(e.<span class="hl-method">toString</span>());
              e.<span class="hl-method">printStackTrace</span>();
          }
        </code></pre>
      </div>

      <hr>

      <h3>When to provide try-catch or declare the method as throws for Checked Exception?</h3>
      <p><strong>try-catch:</strong> We should provide try-catch if we want to handle the exception in the method where checked exception is encountered, as well as if we want to provide user-defined messages to the client.</p>
      <p><strong>throws:</strong> throws keyword describes that the method might throw an Exception, It also might not (Exception always encountered at runtime). It is used only at the end of a method declaration to indicate what exceptions it supports OR what type of Exception it might throw which will be handled by JVM OR caller method.</p>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>It is always better to use try-catch so we can provide appropriate user-defined messages to our client. In case of throws, If an exception encounters at runtime then remaining lines of code will not be executed.</p>
        </div>
      </div>

      <hr>

      <h3>Exception propagation [Propagation of Exception Object from Callee to Caller method]</h3>
      <p>If an exception (Checked OR unchecked) encountered at m2() method and if m2 method is not interested to handle the exception so exception will be propagated to the caller m1() method and remaining lines of m2() method will not be executed.</p>
      <p>Whenever we call a method (including main-> JVM) and if the callee method contains any kind of exception (checked OR Unchecked) and if callee method doesn't contain any kind of exception handling mechanism (try-catch) then JVM will propagate the exception object to caller method for handling purpose. This is called <strong>Exception Propagation</strong>.</p>
      <p>If the caller method also does not contain any exception handling mechanism then JVM will terminate the method from the stack frame hence the remaining part of the method (m1 method) will not be executed even if we handle the exception in another caller method like main.</p>
      <p>If any of the caller method does not contain any exception handling mechanism (try-catch) then exception will be handled by JVM, JVM has default exception handler which will provide the exception message and terminates the program <strong>ABNORMALLY</strong>.</p>

      <h3>Program on Exception Propagation using Checked Exception:</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ExceptionPropagationWithChecked.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">package</span> com.ravi.exception.propagation;
          
          <span class="hl-keyword">class</span> <span class="hl-type">Sample</span> {
              <span class="hl-keyword">static</span> {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Static Block of Sample class"</span>);
              }
          }
          
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ExceptionPropagationWithChecked</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Main method started!!!"</span>);
                  <span class="hl-keyword">try</span> {
                      <span class="hl-method">m1</span>();
                  } <span class="hl-keyword">catch</span>(<span class="hl-type">ClassNotFoundException</span> e) {
                      <span class="hl-type">IO</span>.println(<span class="hl-string">"Handled by main method"</span>);
                  }
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Main method ended!!!"</span>);
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">m1</span>() <span class="hl-keyword">throws</span> <span class="hl-type">ClassNotFoundException</span> {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"m1 method started!"</span>);
                  <span class="hl-method">m2</span>();
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"m1 method ended!"</span>);
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">m2</span>() <span class="hl-keyword">throws</span> <span class="hl-type">ClassNotFoundException</span> {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"m2 method started!!!"</span>);
                  <span class="hl-type">Class</span>.<span class="hl-method">forName</span>(<span class="hl-string">"com.ravi.exception.propagation"</span>);
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"m2 method ended!!!"</span>);
              }
          }
        </code></pre>
      </div>

      <h3>Program on Exception Propagation using Unchecked Exception:</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ExceptionPropagationWithUnchecked.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">package</span> com.ravi.exception.propagation;
          
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ExceptionPropagationWithUnchecked</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Main method started!!"</span>);
                  <span class="hl-keyword">try</span> {
                      <span class="hl-method">m1</span>();
                  } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
                      <span class="hl-type">IO</span>.println(<span class="hl-string">"Handled by main method"</span>);
                  }
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Main method ended!!!"</span>);
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">m1</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"m1 method started"</span>);
                  <span class="hl-keyword">try</span> {
                      <span class="hl-method">m2</span>();
                  } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
                      <span class="hl-type">IO</span>.println(<span class="hl-string">"Handled by m1 method"</span>);
                  }
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"m1 method ended!"</span>);
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">m2</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"m2 method started"</span>);
                  <span class="hl-type">int</span> x = <span class="hl-number">10</span> / <span class="hl-number">0</span>;
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"m2 method ended"</span>);
              }
          }
        </code></pre>
      </div>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>It is strongly recommended that while working with checked exception, method uses throws keyword to skip from the current situation and try to send the exception object to the CALLER method then any of the caller method must handle the exception by using try-catch otherwise program will be terminated abnormally.</p>
        </div>
      </div>

      <hr>

      <h3>Some important rules regarding the checked Exception:</h3>

      <h4>a) If the try block does not throw any checked exception then in the corresponding catch block we can't handle checked exception. It will generate compilation error i.e. "exception never thrown from the corresponding try statement"</h4>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">RuleA.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Test</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                  <span class="hl-keyword">try</span> {
                      <span class="hl-comment">//try block is not throwing checked exception</span>
                      <span class="hl-comment">//ie. InterruptedException</span>
                  } <span class="hl-keyword">catch</span>(<span class="hl-type">InterruptedException</span> e) {
                      <span class="hl-comment">//error</span>
                  }
              }
          }
        </code></pre>
      </div>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>The above rule is not applicable for Unchecked Exception.</p>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">RuleA2.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">try</span> {
              <span class="hl-comment">// no exception</span>
          } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
              e.<span class="hl-method">printStackTrace</span>();  <span class="hl-comment">//Valid</span>
          }
        </code></pre>
      </div>

      <h4>b) If the try block does not throw any exception then in the corresponding catch block we can write Exception OR Throwable because both are the super classes for all types of Exception whether it is checked or unchecked.</h4>
      <p>Throwable = Exception + Error (Unchecked)</p>
      <p>Exception = Sub classes of Exception + RuntimeException (Unchecked)</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">RuleB.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">package</span> com.ravi.checked_exception.rules;
          
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">CatchingWithSuperclass</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                  <span class="hl-keyword">try</span> {
                      <span class="hl-comment">// code</span>
                  } <span class="hl-keyword">catch</span>(<span class="hl-type">Throwable</span> e) {
                      <span class="hl-comment">//Exception OR Throwable both are allowed</span>
                      e.<span class="hl-method">printStackTrace</span>();
                  }
              }
          }
        </code></pre>
      </div>

      <h4>c) At the time of method overriding if the super class method does not reporting or throwing checked exception then the overridden method of sub class not allowed to throw checked exception otherwise it will generate compilation error but overridden method can throw Unchecked Exception.</h4>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">RuleC.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Super</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">show</span>() { }
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Sub</span> <span class="hl-keyword">extends</span> <span class="hl-type">Super</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">show</span>() <span class="hl-keyword">throws</span> <span class="hl-type">CloneNotSupportedException</span> {
                  <span class="hl-comment">//CE (Compilation Error)</span>
              }
          }
        </code></pre>
      </div>

      <h4>d) If the super class method declares with throws keyword to throw a checked exception, then at the time of method overriding, sub class method may or may not use throws keyword.</h4>
      <p>If the Overridden method is also using throws keyword to throw checked exception then it must be either SAME exception class or SUB class, it should not be SUPER class as well as we can't add more exceptions in the overridden method.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">RuleD.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Parent</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">show</span>() <span class="hl-keyword">throws</span> <span class="hl-type">EOFException</span> { }
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Child</span> <span class="hl-keyword">extends</span> <span class="hl-type">Parent</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">show</span>() <span class="hl-keyword">throws</span> <span class="hl-type">IOException</span> {
                  <span class="hl-comment">//CE because IOException is the super class of EOFException</span>
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Exception type must be same type OR subtype"</span>);
              }
          }
        </code></pre>
      </div>

      <h4>e) Just like return keyword, we can't use throw keyword inside static and non-static block to throw an exception object because all initializers must be executed normally.</h4>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">RuleE.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">ExceptionDemo</span> {
              <span class="hl-keyword">static</span> {
                  <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">ArithmeticException</span>();  <span class="hl-comment">//Error</span>
              }
          }
        </code></pre>
      </div>

      <h4>f) If we call any method and if the method throws any checked exception OR java.lang.Exception OR java.lang.Throwable then handling is compulsory at caller Method otherwise it will generate compilation error because Exception and Throwable both are representing checked and Unchecked.</h4>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">RuleF.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">ExceptionDemo</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                  <span class="hl-method">m1</span>();  <span class="hl-comment">//error [Handling is compulsory so write throws OR try-catch]</span>
              }
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">m1</span>() <span class="hl-keyword">throws</span> <span class="hl-type">Exception</span> {
                  <span class="hl-comment">// code</span>
              }
          }
        </code></pre>
      </div>
    `
  },

  {
    id: 'advanced-exception-handling',
    title: 'Advanced Exception Handling',
    icon: 'fas fa-exclamation-triangle',
    category: 'Exceptions Handling',
    content: `
    <h2>Nested try block</h2>
    <p>If we write a try block inside another try block then it is called Nested try block.</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">NestedTry.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">try</span> <span class="hl-comment">//Outer try</span>
        {
            <span class="hl-comment">// statement1;</span>
            <span class="hl-keyword">try</span> <span class="hl-comment">//Inner try</span>
            {
                <span class="hl-comment">// statement2;</span>
            }
            <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) <span class="hl-comment">//Inner catch</span>
            {
                <span class="hl-comment">// ...</span>
            }
        }
        <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) <span class="hl-comment">//Outer Catch</span>
        {
            <span class="hl-comment">// ...</span>
        }
      </code></pre>
    </div>
    <p>The execution of inner try block depends upon outer try block that means if we have an exception in the Outer try block then inner try block will not be executed.</p>

    <h3>Program</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">NestedTryBlock.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">import</span> java.util.Arrays;
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">NestedTryBlock</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-keyword">try</span> {
                    Object obj[] = <span class="hl-keyword">new</span> <span class="hl-type">String</span>[<span class="hl-number">3</span>];
                    <span class="hl-keyword">try</span> {
                        obj[<span class="hl-number">0</span>] = <span class="hl-string">"Java"</span>;
                        obj[<span class="hl-number">1</span>] = <span class="hl-number">67</span>;
                        obj[<span class="hl-number">2</span>] = <span class="hl-string">"Platform Independent langauge"</span>;
                        <span class="hl-type">IO</span>.println(<span class="hl-type">Arrays</span>.<span class="hl-method">toString</span>(obj));
                    } <span class="hl-keyword">catch</span>(<span class="hl-type">ArrayStoreException</span> e) {
                        <span class="hl-type">System</span>.err.println(<span class="hl-string">"Array element data is illegal"</span>);
                    }
                } <span class="hl-keyword">catch</span>(<span class="hl-type">NegativeArraySizeException</span> e) {
                    <span class="hl-type">System</span>.err.println(<span class="hl-string">"Array size must be positive integer"</span>);
                }
            }
        }
      </code></pre>
    </div>

    <h2>Writing try-catch inside catch block</h2>
    <p>We can write try-catch inside catch block but this try-catch block will be executed if the catch block will executed that means if we have an exception in the try block. We can also write try-catch inside finally block.</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">TryWithCatchInsideCatch.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">import</span> java.util.InputMismatchException;
        <span class="hl-keyword">import</span> java.util.Scanner;
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">TryWithCatchInsideCatch</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Scanner</span> sc = <span class="hl-keyword">new</span> <span class="hl-type">Scanner</span>(<span class="hl-type">System</span>.in);
                <span class="hl-keyword">try</span>(sc) {
                    <span class="hl-type">System</span>.out.print(<span class="hl-string">"Enter your Roll number :"</span>);
                    <span class="hl-type">int</span> roll = sc.<span class="hl-method">nextInt</span>();
                    <span class="hl-type">System</span>.out.println(<span class="hl-string">"Your Roll is :"</span>+roll);
                } <span class="hl-keyword">catch</span>(<span class="hl-type">InputMismatchException</span> e) {
                    <span class="hl-type">System</span>.err.println(<span class="hl-string">"Provide Valid input!!"</span>);
                    <span class="hl-keyword">try</span> {
                        <span class="hl-type">System</span>.out.println(<span class="hl-number">10</span>/<span class="hl-number">0</span>);
                    } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e1) {
                        <span class="hl-type">System</span>.err.println(<span class="hl-string">"Divide by zero problem"</span>);
                    }
                } <span class="hl-keyword">finally</span> {
                    <span class="hl-type">System</span>.out.println(<span class="hl-string">"Finally block"</span>);
                    <span class="hl-keyword">try</span> {
                        Object []obj = <span class="hl-keyword">new</span> <span class="hl-type">Integer</span>[<span class="hl-number">3</span>];
                        obj[<span class="hl-number">0</span>] = <span class="hl-number">12</span>;
                        obj[<span class="hl-number">1</span>] = <span class="hl-number">45</span>;
                        obj[<span class="hl-number">2</span>] = <span class="hl-string">"90"</span>; //Invalid
                    } <span class="hl-keyword">catch</span>(<span class="hl-type">ArrayStoreException</span> e) {
                        <span class="hl-type">System</span>.err.println(<span class="hl-string">"Invalid element so can't store in array"</span>);
                    }
                }
            }
        }
      </code></pre>
    </div>

    <h2>try-catch with return statement</h2>
    <p>If we write try-catch block inside a method and that method is returning some value then we should write return statement in both the places i.e inside the try block as well as inside the catch block. We can also write return statement inside the finally block only (Not recommended), if the finally block is present. After this return statement we cannot write any kind of statement. (Unrechable but finally block should be executed completely) Always finally block return statement having more priority then try-catch return statement because finally block return statement override try - catch return statement so compiler will generate warning.</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ReturnDemo1.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.return_example;
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ReturnDemo1</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">IO</span>.println(<span class="hl-method">getValue</span>());
            }
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-type">int</span> <span class="hl-method">getValue</span>() {
                <span class="hl-keyword">try</span> {
                    //int a = 10/0;
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Try block"</span>);
                    <span class="hl-keyword">return</span> <span class="hl-number">10</span>;
                } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Catch block"</span>);
                    <span class="hl-keyword">return</span> <span class="hl-number">20</span>;
                }
                //IO.println("Un-reachable");
            }
        }
      </code></pre>
    </div>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ReturnDemo2.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.return_example;
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ReturnDemo2</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">IO</span>.println(<span class="hl-method">getValue</span>());
            }
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-type">int</span> <span class="hl-method">getValue</span>() {
                <span class="hl-keyword">try</span> {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Try block"</span>);
                    <span class="hl-keyword">return</span> <span class="hl-number">10</span>/<span class="hl-number">0</span>;
                } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Catch block"</span>);
                    <span class="hl-keyword">return</span> <span class="hl-number">20</span>;
                }
            }
        }
      </code></pre>
    </div>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ReturnDemo3.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.return_example;
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ReturnDemo3</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">IO</span>.println(<span class="hl-method">getValue</span>());
            }
            <span class="hl-keyword">@SuppressWarnings</span>(<span class="hl-string">"finally"</span>)
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-type">int</span> <span class="hl-method">getValue</span>() {
                <span class="hl-keyword">try</span> {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Try block"</span>);
                    <span class="hl-keyword">return</span> <span class="hl-number">10</span>;
                } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Catch block"</span>);
                    <span class="hl-keyword">return</span> <span class="hl-number">20</span>;
                } <span class="hl-keyword">finally</span> {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Finally block"</span>);
                    <span class="hl-keyword">return</span> <span class="hl-number">30</span>;
                }
            }
        }
      </code></pre>
    </div>

    <h2>Initialization of a local variable in try and catch</h2>
    <p>A local variable must be initialized inside try block as well as catch block OR at the time of declaration. If we initialize inside the try block only then from catch block we cannot access local variable value, Here initialization is compulsory inside catch block also.</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">VariableInitialization.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">VariableInitialization</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">int</span> x;
                <span class="hl-keyword">try</span> {
                    // something
                } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
                    x = <span class="hl-number">90</span>;
                    <span class="hl-type">IO</span>.println(x);
                }
                // x = 100; IO.println(x);
            }
        }
      </code></pre>
    </div>

    <h2>Difference between throw and throws</h2>
    <p><strong>throw</strong> keyword is used to explicitly create and throw an exception object. It can throw only one exception at a time inside the method body, the control immediately transfers to the nearest catch block. We can only throw the exception which are subtype of Throwable (Then only we can say It is Throwable Object).</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ThrowDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      
        <pre><code>
          throw new ArithmeticException();
          throw new LowBalanceException();
        </code></pre>
    </div>
    <p class="info-box note">Note : LowBalanceException class must be of type Throwable</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ThrowDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ThrowDemo</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-keyword">try</span> {
                    <span class="hl-method">sum</span>(<span class="hl-number">-12</span>,<span class="hl-number">90</span>);
                } <span class="hl-keyword">catch</span>(<span class="hl-type">IllegalArgumentException</span> e) {
                    <span class="hl-type">IO</span>.println(e);
                    <span class="hl-type">IO</span>.println(e.<span class="hl-method">getMessage</span>());
                }
            }
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">sum</span>(<span class="hl-type">int</span> x, <span class="hl-type">int</span> y) {
                <span class="hl-keyword">if</span>(x &lt;= <span class="hl-number">0</span> || y &lt;= <span class="hl-number">0</span>) {
                    <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">IllegalArgumentException</span>(<span class="hl-string">"x and y value cannot be negative"</span>);
                }
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Sum is :"</span>+(x+y));
            }
        }
      </code></pre>
    </div>
    <p class="info-box note">Note : Don't use System.exit(0);</p>
    <p><strong>throws</strong> :- throws keyword describes that the method might throw an Exception, It also might not. (Exception encountered at runtime only) It is used only at the end of a method declaration to indicate what exceptions it supports OR what type of Exception it might throw at runtime. It is used to skip from the current situation so now the exception will be propagated to the caller method OR JVM for handling purpose. It is used to work with Checked Exception as well as we can add more exception at the method declaration must be separated by comma.</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ThrowsDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          public void m1() throws IOException, ClassNotFoundException { ... }
        </code></pre>
    </div>
    <h2>How to develop custom exceptions</h2>
    <p>As a developer we can develop user-defined checked OR user-defined unchecked exception. If we want to develop checked exception then our user-defined class must extends from <code>java.lang.Exception</code>, on the other hand if we want to develop un-checked exception then our user-defined class must extends from <code>java.lang.RuntimeException</code>. In the user-defined exception class we should write No argument constructor (in case if we don't want to pass any error message) and we should write parameterized constructor with String errorMessage as a parameter (in case if we want to pass any error message) with super keyword. In order to throw the exception object explicitly we should use throw keyword as well as our user-defined class must be an instance of Throwable type. [Must be a Throwable Object]</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">CustomCheckedException.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.custom_exception;
        <span class="hl-keyword">import</span> java.util.InputMismatchException;
        <span class="hl-keyword">import</span> java.util.Scanner;
        //Checked Exception
        <span class="hl-keyword">class</span> <span class="hl-type">InvalidAgeException</span> <span class="hl-keyword">extends</span> <span class="hl-type">Exception</span> {
            //Version Compatibility
            <span class="hl-keyword">private</span> <span class="hl-keyword">static</span> <span class="hl-keyword">final</span> <span class="hl-type">long</span> serialVersionUID = <span class="hl-number">1L</span>;
            <span class="hl-keyword">public</span> <span class="hl-type">InvalidAgeException</span>() { }
            <span class="hl-keyword">public</span> <span class="hl-type">InvalidAgeException</span>(String errorMessage) {
                <span class="hl-keyword">super</span>(errorMessage);
            }
        }
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">CustomCheckedException</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Scanner</span> sc = <span class="hl-keyword">new</span> <span class="hl-type">Scanner</span>(<span class="hl-type">System</span>.in);
                <span class="hl-keyword">try</span>(sc) {
                    <span class="hl-type">IO</span>.print(<span class="hl-string">"Enter your Age :"</span>);
                    <span class="hl-type">int</span> age = sc.<span class="hl-method">nextInt</span>();
                    <span class="hl-method">validateAge</span>(age);
                } <span class="hl-keyword">catch</span>(<span class="hl-type">InvalidAgeException</span> e) {
                    <span class="hl-type">IO</span>.println(e);
                } <span class="hl-keyword">catch</span>(<span class="hl-type">InputMismatchException</span> e) {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Input is not in a proper format"</span>);
                } <span class="hl-keyword">catch</span>(<span class="hl-type">Exception</span> e) {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"General Exception"</span>);
                }
            }
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">validateAge</span>(<span class="hl-type">int</span> age) <span class="hl-keyword">throws</span> <span class="hl-type">InvalidAgeException</span> {
                <span class="hl-keyword">if</span>(age &lt; <span class="hl-number">18</span>) {
                    <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">InvalidAgeException</span>(<span class="hl-string">"Age is Invalid"</span>);
                } <span class="hl-keyword">else</span> {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"You are eligible for vote"</span>);
                }
            }
        }
      </code></pre>
    </div>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">CustomUncheckedException.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.exception;
        <span class="hl-keyword">import</span> java.util.Scanner;
        <span class="hl-keyword">@SuppressWarnings</span>(<span class="hl-string">"serial"</span>)
        <span class="hl-keyword">class</span> <span class="hl-type">GreaterMarksException</span> <span class="hl-keyword">extends</span> <span class="hl-type">RuntimeException</span> //Unchecked
        {
            <span class="hl-keyword">public</span> <span class="hl-type">GreaterMarksException</span>() { }
            <span class="hl-keyword">public</span> <span class="hl-type">GreaterMarksException</span>(String errorMessage) {
                <span class="hl-keyword">super</span>(errorMessage);
            }
        }
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">CustomUncheckedException</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Scanner</span> sc = <span class="hl-keyword">new</span> <span class="hl-type">Scanner</span>(<span class="hl-type">System</span>.in);
                <span class="hl-keyword">try</span>(sc) {
                    <span class="hl-type">System</span>.out.print(<span class="hl-string">"Enter your Marks :"</span>);
                    <span class="hl-type">int</span> marks = sc.<span class="hl-method">nextInt</span>();
                    <span class="hl-method">validateMarks</span>(marks);
                } <span class="hl-keyword">catch</span>(<span class="hl-type">GreaterMarksException</span> e) {
                    <span class="hl-type">System</span>.err.println(<span class="hl-string">"Your marks must not be greater than 100"</span>);
                    e.<span class="hl-method">printStackTrace</span>();
                }
            }
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">validateMarks</span>(<span class="hl-type">int</span> marks) {
                <span class="hl-keyword">if</span>(marks &gt; <span class="hl-number">100</span>) {
                    <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">GreaterMarksException</span>(<span class="hl-string">"Invalid Marks"</span>);
                } <span class="hl-keyword">else</span> {
                    <span class="hl-type">System</span>.out.println(<span class="hl-string">"Your Marks is :"</span>+marks);
                }
            }
        }
      </code></pre>
    </div>

    <h2>What is Exception chaining?</h2>
    <p>Exception chaining is the process of linking one exception to another so that the original cause of an exception will be available with us. We can achieve through <code>initCause()</code> &amp; <code>getCause()</code> method of Throwable class.</p>
    <p><code>public synchronized Throwable initCause(Throwable cause)</code> - It is a non static method of the Throwable class used to initialize (set) the cause of an original exception (AE to RE), which enable exception chaining. Some limitation : a) Cannot call multiple times. [java.lang.IllegalStateException] b) Self cause is not allowed. [java.lang.IllegalArgumentException]</p>
    <p><code>public synchronized Throwable getCause()</code> - It is a non-static method of the Throwable class used to retrieve the cause of ORIGINAL EXCEPTION associated with the current exception.</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ExceptionChainingDemo1.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.exception_chaning;
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ExceptionChainingDemo1</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-keyword">try</span> {
                    <span class="hl-type">int</span> x = <span class="hl-number">10</span>/<span class="hl-number">0</span>;
                } <span class="hl-keyword">catch</span>(<span class="hl-type">ArithmeticException</span> e) {
                    <span class="hl-keyword">try</span> {
                        <span class="hl-type">RuntimeException</span> e1 = <span class="hl-keyword">new</span> <span class="hl-type">RuntimeException</span>(<span class="hl-string">"Exception Wrapper"</span>);
                        e1.<span class="hl-method">initCause</span>(e);
                        <span class="hl-keyword">throw</span> e1;
                    } <span class="hl-keyword">catch</span>(<span class="hl-type">RuntimeException</span> e2) {
                        <span class="hl-type">IO</span>.println(<span class="hl-string">"Wrapper Exception :"</span>+e2);
                        <span class="hl-type">IO</span>.println(<span class="hl-string">"Original Exception :"</span>+e2.<span class="hl-method">getCause</span>());
                    }
                }
            }
        }
      </code></pre>
    </div>
  `
  },

  // ================================================================
  // FUNCTIONAL INTERFACES
  // ================================================================
  {
    id: 'functional-interfaces',
    title: 'Functional Interfaces',
    icon: 'fas fa-bolt',
    category: 'Java 8 Features',
    content: `
      <h2>Functional Interfaces</h2>
      <p>An interface with exactly one abstract method (SAM - Single Abstract Method).</p>
      <p>Can have multiple default/static methods.</p>
      <h3>Predefined Functional Interfaces (java.util.function)</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Interface</th><th>Method</th><th>Description</th></tr>
          <tr><td>Predicate&lt;T&gt;</td><td>boolean test(T t)</td><td>Test condition</td></tr>
          <tr><td>Consumer&lt;T&gt;</td><td>void accept(T t)</td><td>Perform action</td></tr>
          <tr><td>Function&lt;T,R&gt;</td><td>R apply(T t)</td><td>Transform</td></tr>
          <tr><td>Supplier&lt;T&gt;</td><td>T get()</td><td>Supply value</td></tr>
          <tr><td>BiPredicate&lt;T,U&gt;</td><td>boolean test(T,U)</td><td>Two args test</td></tr>
          <tr><td>BiConsumer&lt;T,U&gt;</td><td>void accept(T,U)</td><td>Two args consume</td></tr>
          <tr><td>BiFunction&lt;T,U,R&gt;</td><td>R apply(T,U)</td><td>Two args transform</td></tr>
          <tr><td>UnaryOperator&lt;T&gt;</td><td>T apply(T)</td><td>Same type</td></tr>
          <tr><td>BinaryOperator&lt;T&gt;</td><td>T apply(T,T)</td><td>Two args same type</td></tr>
        </table>
      </div>
    `
  },

  // ================================================================
  // LAMBDA EXPRESSIONS
  // ================================================================
  {
    id: 'lambda-expressions',
    title: 'Lambda Expressions',
    icon: 'fas fa-code-branch',
    category: 'Java 8 Features',
    content: `
      <h2>Lambda Expressions</h2>
      <p>A lambda expression is an anonymous function (no name, no return type, no modifiers).</p>
      <p>Syntax: <code>(parameters) -&gt; expression</code> or <code>(parameters) -&gt; { statements; }</code></p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">LambdaDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">Runnable</span> r = () -&gt; <span class="hl-type">System</span>.out.println(<span class="hl-string">"Hello"</span>);
          <span class="hl-type">Predicate</span>&lt;Integer&gt; isEven = n -&gt; n % <span class="hl-number">2</span> == <span class="hl-number">0</span>;
          <span class="hl-type">Function</span>&lt;Integer,Integer&gt; square = n -&gt; n * n;
          <span class="hl-comment">// Usage</span>
          <span class="hl-type">System</span>.out.println(isEven.<span class="hl-method">test</span>(<span class="hl-number">10</span>));  <span class="hl-comment">// true</span>
          <span class="hl-type">System</span>.out.println(square.<span class="hl-method">apply</span>(<span class="hl-number">5</span>));   <span class="hl-comment">// 25</span>
        </code></pre>
      </div>
      <h3>Method Reference</h3>
      <p>Shorthand: <code>ClassName::methodName</code></p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MethodRef.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">Function</span>&lt;String,Integer&gt; f = Integer::<span class="hl-method">parseInt</span>;
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // OBJECT CLASS METHODS
  // ================================================================
  {
    id: 'object-class-methods',
    title: 'Object Class Methods',
    icon: 'fas fa-object-group',
    category: 'Advanced Java',
    content: `
      <h2>Object Class Methods</h2>
      <p>Object is superclass of all classes.</p>
      <h3>Key Methods</h3>
      <ul>
        <li><strong>getClass():</strong> Returns runtime class information.</li>
        <li><strong>hashCode():</strong> Returns a unique integer for the object (used in HashTables).</li>
        <li><strong>equals(Object obj):</strong> Compares two objects (default is reference comparison).</li>
        <li><strong>toString():</strong> Returns a string representation (default is class@hashcode).</li>
      </ul>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ObjectDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">Student</span> s1 = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>(<span class="hl-number">101</span>, <span class="hl-string">"Scott"</span>);
          <span class="hl-type">System</span>.out.println(s1.<span class="hl-method">getClass</span>());   <span class="hl-comment">// class Student</span>
          <span class="hl-type">System</span>.out.println(s1.<span class="hl-method">hashCode</span>());  <span class="hl-comment">// unique integer</span>
          <span class="hl-type">System</span>.out.println(s1.<span class="hl-method">toString</span>()); <span class="hl-comment">// overridden or default</span>
        </code></pre>
      </div>
      <h3>toString() Override Example</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ToStringDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Student</span> {
              <span class="hl-type">int</span> id;
              String name;
              <span class="hl-type">Student</span>(<span class="hl-type">int</span> id, String name) {
                  <span class="hl-keyword">this</span>.id = id;
                  <span class="hl-keyword">this</span>.name = name;
              }
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> String <span class="hl-method">toString</span>() {
                  <span class="hl-keyword">return</span> <span class="hl-string">"Student [id="</span> + id + <span class="hl-string">", name="</span> + name + <span class="hl-string">"]"</span>;
              }
          }
        </code></pre>
      </div>
    `
  },
  // ================================================================
  // STATIC & INSTANCE BLOCKS
  // ================================================================
  {
    id: 'static-instance-blocks',
    title: 'Static & Instance Blocks',
    icon: 'fas fa-cubes',
    category: 'Advanced Java',
    content: `
      <h2>Static Block (Static Initializer)</h2>
      <p>It is a very special block in java which is automatically executed at the time of <strong>loading the .class into JVM memory</strong>.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StaticBlock.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Test</span> {
              <span class="hl-keyword">static</span> {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Static Block"</span>);
              }
          }
        </code></pre>
      </div>
      <ul>
        <li>A class will not be loaded automatically in java, A class will be loaded as per user request.</li>
        <li>A static block will be executed <strong>only once</strong> because a class can be loaded only one time in JVM memory.</li>
        <li>The main purpose of static block to initialize the static field of the class as well as if we want to provide a common message at the time of loading of the class.</li>
      </ul>
      <h3>Ways to Load a Class into JVM Memory</h3>
      <ol>
        <li>1) By using Java command</li>
        <li>2) By using new keyword (at the time of creating object)</li>
        <li>3) By accessing the static member of the class</li>
        <li>4) By using Inheritance (loading a sub class loads all super classes first)</li>
        <li>5) Reflection API</li>
      </ol>
      <h2>Instance Block (Non-Static Block / Initializer)</h2>
      <p>It is a special block which is automatically executed at the time of creating the object. This block is executed <strong>before the constructor body</strong>.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">InstanceBlock.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Sample</span> {
              <span class="hl-comment">// Instance block</span>
              {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Instance Block"</span>);
              }
              <span class="hl-type">Sample</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Constructor"</span>);
              }
          }
          <span class="hl-comment">// When we create new Sample(), output:</span>
          <span class="hl-comment">// Instance Block</span>
          <span class="hl-comment">// Constructor</span>
        </code></pre>
      </div>
      <h3>Order of Execution</h3>
      <p>Static Block (when class is loaded) → Instance Block (when object is created) → Constructor</p>
    `
  },

  // ================================================================
  // CLASS LOADING & RUNTIME AREAS
  // ================================================================
  {
    id: 'class-loading',
    title: 'Class Loading & Runtime Areas',
    icon: 'fas fa-boxes',
    category: 'Advanced Java',
    content: `
      <h2>Class Loading in JVM</h2>
      <p>JVM uses <strong>Class Loader</strong> to load .class files into memory.</p>
      <h3>Types of Class Loaders</h3>
      <ol>
        <li><strong>1. Bootstrap Class Loader:</strong>
          <ul>
            <li>Responsible for loading all the predefined .class files (API level classes).</li>
            <li>Has highest priority.</li>
            <li>Loads from: C:\\Program Files\\Java\\JDK\\lib\\jrt-fs.jar</li>
          </ul>
        </li>
        <li><strong>2. Platform/Extension Class Loader:</strong>
          <ul>
            <li>Before Java 9V, known as Extension class loader.</li>
            <li>Loads from: C:\\Program Files\\Java\\JDK\\lib\\ext\\</li>
            <li>From Java 9V onwards, uses JPMs (Java Platform Module System).</li>
          </ul>
        </li>
        <li><strong>3. Application OR System Class Loader:</strong>
          <ul>
            <li>Responsible to load all user-defined .class files.</li>
            <li>Has lowest priority.</li>
            <li>Loads from classpath.</li>
          </ul>
        </li>
      </ol>
      <h3>Runtime Data Areas</h3>
      <p>After class loading, JVM allocates memory in following areas:</p>
      <ul>
        <li><strong>1. Method Area:</strong> Class metadata, static variables, method code</li>
        <li><strong>2. Heap Area:</strong> Objects and instance variables</li>
        <li><strong>3. Stack Area:</strong> Method calls, local variables, parameters</li>
        <li><strong>4. PC Register:</strong> Program counter for each thread</li>
        <li><strong>5. Native Method Stack:</strong> For native methods</li>
      </ul>
      <h3>Complete Field & Variables Details</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Variable Type</th><th>Position</th><th>Memory</th><th>Accessibility</th><th>Lifetime</th></tr>
          <tr><td>Static Field</td><td>Inside Class</td><td>Method Area</td><td>Class name</td><td>Entire program</td></tr>
          <tr><td>Non-Static Field</td><td>Inside Class</td><td>Heap Area</td><td>Object reference</td><td>As long as object exists</td></tr>
          <tr><td>Local Variable</td><td>Inside Method</td><td>Stack Area</td><td>Only inside method</td><td>Until method ends</td></tr>
          <tr><td>Parameter Variable</td><td>Method signature</td><td>Stack Area</td><td>Only inside method</td><td>Until method ends</td></tr>
        </table>
      </div>
    `
  },

  // ================================================================
  // SHALLOW & DEEP COPY
  // ================================================================
  {
    id: 'shallow-deep-copy',
    title: 'Shallow & Deep Copy',
    icon: 'fas fa-copy',
    category: 'Advanced Java',
    content: `
      <h2>Shallow vs Deep Copy</h2>
      <p><strong>Shallow Copy:</strong> Only object reference is copied, so changes affect the original.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ShallowCopy.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Laptop</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">double</span> price;
              <span class="hl-keyword">public</span> <span class="hl-type">Laptop</span>(<span class="hl-type">double</span> price) {
                  <span class="hl-keyword">this</span>.price = price;
              }
          }
          Laptop lap1 = <span class="hl-keyword">new</span> <span class="hl-type">Laptop</span>(<span class="hl-number">80000</span>);
          Laptop lap2 = lap1; <span class="hl-comment">// shallow copy</span>
          lap2.setPrice(<span class="hl-number">85000</span>);
          <span class="hl-comment">// lap1 also changes to 85000</span>
        </code></pre>
      </div>
      <p><strong>Deep Copy:</strong> A completely new object is created with the same values. Use <code>clone()</code> or copy constructor.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">DeepCopy.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Laptop</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">double</span> price;
              <span class="hl-keyword">public</span> <span class="hl-type">Laptop</span>(<span class="hl-type">double</span> price) {
                  <span class="hl-keyword">this</span>.price = price;
              }
              <span class="hl-comment">// Copy constructor for deep copy</span>
              <span class="hl-keyword">public</span> <span class="hl-type">Laptop</span>(<span class="hl-type">Laptop</span> source) {
                  <span class="hl-keyword">this</span>.price = source.price;
              }
          }
          Laptop lap1 = <span class="hl-keyword">new</span> <span class="hl-type">Laptop</span>(<span class="hl-number">80000</span>);
          Laptop lap2 = <span class="hl-keyword">new</span> <span class="hl-type">Laptop</span>(lap1); <span class="hl-comment">// deep copy</span>
          lap2.setPrice(<span class="hl-number">85000</span>);
          <span class="hl-comment">// lap1 remains 80000</span>
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // ACCESS MODIFIERS
  // ================================================================
  {
    id: 'access-modifiers',
    title: 'Access Modifiers',
    icon: 'fas fa-shield-alt',
    category: 'OOP',
    content: `
      <h2>Access Modifiers in Java</h2>
      <p>Access modifiers control the visibility of classes, fields, and methods.</p>
      <div class="table-responsive">
       <table>
        <tr>
          <th class="access-heading">Modifier</th>
          <th class="access-heading">Same Class</th>
          <th class="access-heading">Same Package</th>
          <th class="access-heading">Subclass (Different Package)</th>
          <th class="access-heading">Anywhere</th>
        </tr>

        <tr>
          <td class="access-heading"><strong>private</strong></td>
          <td class="access-yes">✓</td>
          <td class="access-no">✗</td>
          <td class="access-no">✗</td>
          <td class="access-no">✗</td>
        </tr>

        <tr>
          <td class="access-heading"><strong>default</strong></td>
          <td class="access-yes">✓</td>
          <td class="access-yes">✓</td>
          <td class="access-no">✗</td>
          <td class="access-no">✗</td>
        </tr>

        <tr>
          <td class="access-heading"><strong>protected</strong></td>
          <td class="access-yes">✓</td>
          <td class="access-yes">✓</td>
          <td class="access-yes">✓</td>
          <td class="access-no">✗</td>
        </tr>

        <tr>
          <td class="access-heading"><strong>public</strong></td>
          <td class="access-yes">✓</td>
          <td class="access-yes">✓</td>
          <td class="access-yes">✓</td>
          <td class="access-yes">✓</td>
        </tr>
      </table>

      </div>
      <h3>Important Points:</h3>
      <ul>
        <li><strong>private:</strong> accessible only within the same class. Used for data hiding.</li>
        <li><strong>default (package-private):</strong> accessible within the same package. It is the default if no modifier is specified.</li>
        <li><strong>protected:</strong> accessible within same package + subclasses in other packages.</li>
        <li><strong>public:</strong> accessible from anywhere.</li>
      </ul>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>In Java, outer classes can only be public, abstract, final, or sealed. Non-static fields should be private (data hiding).</p>
        </div>
      </div>
    `
  },

  // ================================================================
  // VARIABLE HIDING
  // ================================================================
  {
    id: 'variable-hiding',
    title: 'Variable Hiding',
    icon: 'fas fa-eye-slash',
    category: 'OOP',
    content: `
      <h2>Variable Hiding</h2>
      <p>When a subclass declares a field with the same name as a field in the superclass, the subclass field "hides" the superclass field.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">VariableHiding.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Parent</span> {
              <span class="hl-type">int</span> x = <span class="hl-number">100</span>;
          }
          <span class="hl-keyword">class</span> <span class="hl-type">Child</span> <span class="hl-keyword">extends</span> <span class="hl-type">Parent</span> {
              <span class="hl-type">int</span> x = <span class="hl-number">200</span>;  <span class="hl-comment">// Variable Hiding</span>
              <span class="hl-keyword">void</span> <span class="hl-method">show</span>() {
                  <span class="hl-type">System</span>.out.println(x);          <span class="hl-comment">// 200 (Child)</span>
                  <span class="hl-type">System</span>.out.println(<span class="hl-keyword">super</span>.x);  <span class="hl-comment">// 100 (Parent)</span>
              }
          }
        </code></pre>
      </div>
      <h3>Why use Variable Hiding?</h3>
      <p>It is used to access the superclass non-static field with the same name using the <strong>super</strong> keyword.</p>
    `
  },

  // ================================================================
  // COVARIANT RETURN TYPE
  // ================================================================
  {
    id: 'covariant-return',
    title: 'Covariant Return Type',
    icon: 'fas fa-arrow-circle-right',
    category: 'OOP',
    content: `
      <h2>Covariant Return Type</h2>
      <p>When overriding a method, the return type can be a subtype of the original return type. This is called covariant return type.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Covariant.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">A</span> {
              <span class="hl-type">A</span> get() { <span class="hl-keyword">return</span> <span class="hl-keyword">this</span>; }
          }
          <span class="hl-keyword">class</span> <span class="hl-type">B</span> <span class="hl-keyword">extends</span> <span class="hl-type">A</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-type">B</span> get() { <span class="hl-keyword">return</span> <span class="hl-keyword">this</span>; }  <span class="hl-comment">// Covariant (return type is B, not A)</span>
          }
        </code></pre>
      </div>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>Covariant return type allows more specific return types when overriding, improving readability and reducing casting.</p>
        </div>
      </div>
    `
  },

  // ================================================================
  // IS-A vs HAS-A RELATION
  // ================================================================
  {
    id: 'is-a-has-a',
    title: 'IS-A vs HAS-A Relation',
    icon: 'fas fa-sitemap',
    category: 'OOP',
    content: `
      <h2>IS-A vs HAS-A</h2>
      <p><strong>IS-A:</strong> Inheritance (class Car extends Vehicle).</p>
      <p><strong>HAS-A:</strong> Composition/Aggregation (class Car { Engine engine; }).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Composition.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Engine</span> { }
          <span class="hl-keyword">class</span> <span class="hl-type">Car</span> {
              <span class="hl-keyword">private</span> Engine engine; <span class="hl-comment">// HAS-A</span>
          }
        </code></pre>
      </div>
      <h3>Advantages of HAS-A</h3>
      <ul>
        <li>Better encapsulation (we can hide the internal components).</li>
        <li>More flexible than inheritance (can change components at runtime).</li>
        <li>Loose coupling.</li>
      </ul>
    `
  },

  // ================================================================
  // METHOD HIDING
  // ================================================================
  {
    id: 'method-hiding',
    title: 'Method Hiding',
    icon: 'fas fa-eye-slash',
    category: 'OOP',
    content: `
      <h2>Method Hiding</h2>
      <p>When a static method in a subclass has the same signature as a static method in the superclass, the subclass method "hides" the superclass method. This is called Method Hiding.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MethodHiding.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Parent</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">display</span>() {
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"Parent display"</span>);
              }
          }
          <span class="hl-keyword">class</span> <span class="hl-type">Child</span> <span class="hl-keyword">extends</span> <span class="hl-type">Parent</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">display</span>() {
                  <span class="hl-type">System</span>.out.println(<span class="hl-string">"Child display"</span>);
              }
          }
          <span class="hl-comment">// Usage</span>
          Parent p = <span class="hl-keyword">new</span> <span class="hl-type">Child</span>();
          p.<span class="hl-method">display</span>();  <span class="hl-comment">// Output: Parent display (because static methods are bound at compile time)</span>
        </code></pre>
      </div>
      <h3>Difference between Method Hiding and Method Overriding</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Feature</th><th>Method Hiding</th><th>Method Overriding</th></tr>
          <tr><td>Method Type</td><td>Static</td><td>Non-Static</td></tr>
          <tr><td>Binding</td><td>Compile-time (Early binding)</td><td>Runtime (Late binding)</td></tr>
          <tr><td>Resolution</td><td>Based on reference type</td><td>Based on object type</td></tr>
        </table>
      </div>
    `
  },
  // ================================================================
  // COMMAND LINE ARGUMENTS (Detailed)
  // ================================================================
  {
    id: 'command-line-arguments',
    title: 'Command Line Arguments',
    icon: 'fas fa-terminal',
    category: 'Advanced Java',
    content: `
      <h2>Command Line Argument?</h2>
      <p>If we want to pass any argument to the main method then it is called <strong>Command Line Argument</strong>.</p>
      <p>By using command line argument, we can pass some value at runtime i.e. at the time of execution.</p>
      
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Advantage of Command Line Argument:</div>
          <p>We can get the program executed with <strong>single time compilation</strong> and <strong>number of times execution</strong> with different values.</p>
        </div>
      </div>

      <h3>Program 1: Simple Command Line Argument</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">CommandLine.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
              <span class="hl-type">IO</span>.println(args[<span class="hl-number">0</span>]);
              <span class="hl-type">IO</span>.println(args[<span class="hl-number">1</span>]);
          }
          
          <span class="hl-comment">// Run: javac CommandLine.java</span>
          <span class="hl-comment">// Run: java CommandLine Alen John</span>
          <span class="hl-comment">// Output: Alen</span>
          <span class="hl-comment">//         John</span>
        </code></pre>
      </div>

      <h3>Program 2: Adding two numbers using command line argument</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">CommandLineSum.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] num) {
              <span class="hl-type">int</span> sum = <span class="hl-type">Integer</span>.parseInt(num[<span class="hl-number">0</span>]) + <span class="hl-type">Integer</span>.parseInt(num[<span class="hl-number">1</span>]);
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Sum is: "</span> + sum);
          }
          <span class="hl-comment">// Run: java CommandLineSum 12 90</span>
          <span class="hl-comment">// Output: Sum is: 102</span>
        </code></pre>
      </div>

      <h3>How to configure Edit Plus for accepting values for Command Line argument:</h3>
      <ol>
        <li>1) File -&gt; Save</li>
        <li>2) Insert Command: javac &lt;FileName&gt;.java</li>
        <li>3) Command: java &lt;FileName&gt; &lt;Argument1&gt; &lt;Argument2&gt; &lt;Argument3&gt;</li>
        <li>4) File Dir -&gt; Initial Directory</li>
      </ol>
    `
  },

  // ================================================================
  // WRAPPER CLASSES & AUTOBOXING (Detailed)
  // ================================================================
  {
    id: 'wrapper-classes',
    title: 'Wrapper Classes & Autoboxing',
    icon: 'fas fa-box-open',
    category: 'Advanced Java',
    content: `
      <h2>Wrapper Classes in Java</h2>
      <p>Wrapper classes convert primitive data types into objects and vice versa.</p>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Why Wrapper Classes?</div>
          <p>As we know, Java is not a pure object oriented language because It accepts primitive data types. Except these 8 primitive data types, everything in Java is object. The basic limitation of these primitive data types, It cannot move in the network, Actually only objects are moving in the network.</p>
        </div>
      </div>

      <h3>Primitive to Wrapper (Autoboxing)</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">AutoBoxing.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-comment">// 1) public static Integer valueOf(int x)</span>
          <span class="hl-comment">// It is a predefined method of Integer class which is used to convert the primitive int data type into Integer Wrapper object.</span>
          
          <span class="hl-type">int</span> x = <span class="hl-number">100</span>;
          Integer y = Integer.<span class="hl-method">valueOf</span>(x);  <span class="hl-comment">// Upto JDK 1.4V</span>
          
          <span class="hl-comment">// 2) public static Integer valueOf(String str)</span>
          <span class="hl-comment">// It is a predefined static method of Integer class which is used to convert the String into Integer Wrapper object.</span>
          
          <span class="hl-comment">// JDK 1.5V onwards [Autoboxing]</span>
          <span class="hl-type">int</span> x = <span class="hl-number">100</span>;
          Integer y = x;  <span class="hl-comment">// Autoboxing automatic</span>
        </code></pre>
      </div>

      <h3>All 8 Wrapper Classes valueOf() Example</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">AllBoxing.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">byte</span> b = <span class="hl-number">12</span>;
          Byte b1 = Byte.<span class="hl-method">valueOf</span>(b);
          
          <span class="hl-type">short</span> s = <span class="hl-number">12</span>;
          Short s1 = Short.<span class="hl-method">valueOf</span>(s);
          
          <span class="hl-type">int</span> i = <span class="hl-number">12</span>;
          Integer i1 = Integer.<span class="hl-method">valueOf</span>(i);
          
          <span class="hl-type">long</span> x = <span class="hl-number">90</span>;
          Long x1 = Long.<span class="hl-method">valueOf</span>(x);
          
          <span class="hl-type">float</span> f = <span class="hl-number">12.6F</span>;
          Float f1 = Float.<span class="hl-method">valueOf</span>(f);
          
          <span class="hl-type">double</span> d = <span class="hl-number">12.67</span>;
          Double d1 = Double.<span class="hl-method">valueOf</span>(d);
          
          <span class="hl-type">char</span> ch = <span class="hl-string">'A'</span>;
          Character ch1 = Character.<span class="hl-method">valueOf</span>(ch);
          
          <span class="hl-keyword">boolean</span> val = <span class="hl-keyword">true</span>;
          Boolean val1 = Boolean.<span class="hl-method">valueOf</span>(val);
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // PACKAGES (BLC & ELC) (Detailed)
  // ================================================================
  {
    id: 'packages',
    title: 'Packages (BLC & ELC)',
    icon: 'fas fa-folder',
    category: 'Advanced Java',
    content: `
      <h2>BLC & ELC Classes</h2>
      
      <h3>BLC (Business Logic Class)</h3>
      <p>It stands for Business Logic Class (BLC). It is mainly used to write the business logic so, we can reuse this BLC class from different packages.</p>
      <ul>
        <li>It will never contain main method.</li>
        <li>Example: Calculator, Arithmetic Operation Logic</li>
      </ul>

      <h3>ELC (Executable Logic Class)</h3>
      <p>It stands for Executable Logic Class (ELC). It is mainly used to execute our Java program OR we can say the execution of the program OR project will stop here.</p>
      <ul>
        <li>It will contain main() method so execution will start from here.</li>
        <li>Example: public class Main { void main() { } }</li>
      </ul>

      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Note:</div>
          <p>We should always write our java program using BLC &amp; ELC classes then only <strong>Re-usability</strong> of our BLC class is possible from different packages.</p>
        </div>
      </div>

      <h3>How many public classes we can write in a single java source file?</h3>
      <p>We can write only one public class in a single java source file. And it must be the file name.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">FileStructure.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Test</span> { }
          <span class="hl-keyword">class</span> <span class="hl-type">Beta</span> { }
          <span class="hl-keyword">class</span> <span class="hl-type">Alpha</span> { }
          
          <span class="hl-comment">// Only one public class allowed</span>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Test</span> { }
          
          <span class="hl-comment">// After compilation total 4 class files will be created: Test.class, Alpha.class, Beta.class</span>
        </code></pre>
      </div>

      <h3>Structure of a Java class</h3>
      <p>Any Java class either BLC OR ELC should follow the same structure:</p>
      <ol>
        <li>1) Package statement should be in the first line</li>
        <li>2) Import statement should be in the second line</li>
        <li>3) Declaration of the class should start from 3rd line</li>
      </ol>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">PackageStructure.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">package</span> com.ravi.blc;
          <span class="hl-keyword">import</span> java.util.Arrays;
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Square</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">getSquare</span>(<span class="hl-type">int</span> num) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Square of "</span> + num + <span class="hl-string">" is: "</span> + (num * num));
              }
          }
        </code></pre>
      </div>

      <h3>Working with Static Methods using BLC & ELC</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Square.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">package</span> com.ravi.blc;
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Square</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">getSquare</span>(<span class="hl-type">double</span> num) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Square of "</span> + num + <span class="hl-string">" is: "</span> + (num * num));
              }
          }
        </code></pre>
      </div>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Main.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">package</span> com.ravi.elc;
          <span class="hl-keyword">import</span> com.ravi.blc.*;
          
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Main</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Main Method is started"</span>);
                  Square.<span class="hl-method">getSquare</span>(<span class="hl-number">20</span>, <span class="hl-number">5</span>);
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // NUMBER PROGRAMS (Detailed)
  // ================================================================
  {
    id: 'number-programs',
    title: 'Number Programs',
    icon: 'fas fa-hashtag',
    category: 'Control Flow',
    content: `
      <h2>Number Programs in Java</h2>
      <p>These are important programming exercises for understanding loops and logic.</p>

      <h3>1. Palindrome Number</h3>
      <p>Steps to check palindrome:</p>
      <ol>
        <li>Store the original number in a temporary variable.</li>
        <li>Initialize reverse = 0</li>
        <li>Reverse the number:
          <br>a) Extract the last digit using num % 10, till num!=0
          <br>b) Add it to the reversed number: reverse = (reverse * 10) + digit.
          <br>c) Remove the last digit from the original number: num = num / 10.
        </li>
        <li>Compare the reversed number with the temp variable.</li>
        <li>If both are equal, the number is a palindrome; otherwise, it is not.</li>
      </ol>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Palindrome.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> number = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter a number: "</span>));
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Is "</span> + number + <span class="hl-string">" palindrome number: "</span> + <span class="hl-method">isPalindrome</span>(number));
          }
          <span class="hl-keyword">public</span> <span class="hl-keyword">boolean</span> <span class="hl-method">isPalindrome</span>(<span class="hl-type">int</span> num) {
              <span class="hl-type">int</span> temp = num;
              <span class="hl-type">int</span> reverse = <span class="hl-number">0</span>;
              <span class="hl-keyword">while</span>(num != <span class="hl-number">0</span>) {
                  <span class="hl-type">int</span> digit = num % <span class="hl-number">10</span>;
                  reverse = (reverse * <span class="hl-number">10</span>) + digit;
                  num = num / <span class="hl-number">10</span>;
              }
              <span class="hl-keyword">return</span> temp == reverse;
          }
        </code></pre>
      </div>

      <h3>2. Strong Number</h3>
      <p>If the sum of factorials of all individual digits of a number is equal to the number itself, then it is called a Strong Number.</p>
      <p><strong>Example:</strong> 145 → 1! + 4! + 5! = 1 + 24 + 120 = 145</p>
      <p><strong>Example:</strong> 40585 → 4! + 0! + 5! + 8! + 5! = 40585</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StrongNumber.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> number = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter the number: "</span>));
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Is "</span> + number + <span class="hl-string">" Strong number: "</span> + <span class="hl-method">isStrong</span>(number));
          }
          <span class="hl-keyword">boolean</span> <span class="hl-method">isStrong</span>(<span class="hl-type">int</span> num) {
              <span class="hl-type">int</span> temp = num;
              <span class="hl-type">int</span> sum = <span class="hl-number">0</span>;
              <span class="hl-keyword">while</span>(num != <span class="hl-number">0</span>) {
                  <span class="hl-type">int</span> digit = num % <span class="hl-number">10</span>;
                  sum = sum + <span class="hl-method">getFactorial</span>(digit);
                  num = num / <span class="hl-number">10</span>;
              }
              <span class="hl-keyword">return</span> temp == sum;
          }
          <span class="hl-type">int</span> <span class="hl-method">getFactorial</span>(<span class="hl-type">int</span> n) {
              <span class="hl-type">int</span> fact = <span class="hl-number">1</span>;
              <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= n; i++) {
                  fact = fact * i;
              }
              <span class="hl-keyword">return</span> fact;
          }
          <span class="hl-comment">// Note: We are reusing the getFactorial() method to find out the factorial of each individual digit</span>
        </code></pre>
      </div>

      <h3>3. Spy Number</h3>
      <p>A number is called a Spy Number if, Sum of digits = Product of digits</p>
      <p><strong>Example:</strong> 123, 1124 (1+2+3=1*2*3)</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SpyNumber.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> num = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter a number: "</span>));
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Is "</span> + num + <span class="hl-string">" spy number: "</span> + <span class="hl-method">isSpy</span>(num));
          }
          <span class="hl-keyword">public</span> <span class="hl-keyword">boolean</span> <span class="hl-method">isSpy</span>(<span class="hl-type">int</span> num) {
              <span class="hl-type">int</span> sum = <span class="hl-number">0</span>;
              <span class="hl-type">int</span> prod = <span class="hl-number">1</span>;
              <span class="hl-keyword">while</span>(num != <span class="hl-number">0</span>) {
                  <span class="hl-type">int</span> digit = num % <span class="hl-number">10</span>;
                  sum = sum + digit;
                  prod = prod * digit;
                  num = num / <span class="hl-number">10</span>;
              }
              <span class="hl-keyword">return</span> sum == prod;
          }
        </code></pre>
      </div>

      <h3>4. Prime Number</h3>
      <p>If a number is divisible by 1 and itself (exactly two factors) then it is called prime number.</p>
      <p><strong>Prime:</strong> 2, 3, 5, 7, 11</p>
      <p><strong>Not Prime:</strong> 1, 4, 6, 9</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">PrimeNumber.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> num = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter a number: "</span>));
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Is "</span> + num + <span class="hl-string">" prime number: "</span> + <span class="hl-method">isPrime</span>(num));
          }
          <span class="hl-keyword">public</span> <span class="hl-keyword">boolean</span> <span class="hl-method">isPrime</span>(<span class="hl-type">int</span> num) {
              <span class="hl-keyword">if</span>(num &lt;= <span class="hl-number">1</span>) <span class="hl-keyword">return</span> <span class="hl-keyword">false</span>;
              <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i = <span class="hl-number">2</span>; i &lt;= num / <span class="hl-number">2</span>; i++) {
                  <span class="hl-keyword">if</span>(num % i == <span class="hl-number">0</span>) <span class="hl-keyword">return</span> <span class="hl-keyword">false</span>;
              }
              <span class="hl-keyword">return</span> <span class="hl-keyword">true</span>;
          }
        </code></pre>
      </div>
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Assignment:</div>
          <p>WAP to find all the prime numbers from 1 to 100.</p>
        </div>
      </div>

      <h3>5. Duck Number</h3>
      <p>A number is called a Duck Number if:</p>
      <ul>
        <li>It contains at least one zero (0) and must be positive number</li>
        <li>The number should NOT start with zero</li>
      </ul>
      <p><strong>Valid:</strong> 708, 170</p>
      <p><strong>Invalid:</strong> 0299 (Not a duck number)</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">DuckNumber.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> number = <span class="hl-type">Integer</span>.parseInt(<span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter a number: "</span>));
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Is "</span> + number + <span class="hl-string">" duck number: "</span> + <span class="hl-method">isDuck</span>(number));
          }
          <span class="hl-keyword">public</span> <span class="hl-keyword">boolean</span> <span class="hl-method">isDuck</span>(<span class="hl-type">int</span> num) {
              String str = <span class="hl-type">String</span>.<span class="hl-method">valueOf</span>(num);
              <span class="hl-keyword">if</span>(str.<span class="hl-method">charAt</span>(<span class="hl-number">0</span>) == <span class="hl-string">'0'</span>) <span class="hl-keyword">return</span> <span class="hl-keyword">false</span>;
              <span class="hl-keyword">return</span> str.<span class="hl-method">contains</span>(<span class="hl-string">"0"</span>);
          }
        </code></pre>
      </div>
    `
  },
  // ================================================================
  // OPERATORS (Detailed)
  // ================================================================
  {
    id: 'operators',
    title: 'Operators',
    icon: 'fas fa-plus-circle',
    category: 'Core Java Basics',
    content: `
      <h2>Operators in Java</h2>
      <p>Operators are special symbols that perform operations on operands.</p>
      <h3>Types of Operators</h3>
      <ul>
        <li><strong>Arithmetic Operators:</strong> +, -, *, /, %, ++, --</li>
        <li><strong>Relational Operators:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
        <li><strong>Logical Operators:</strong> &amp;&amp;, ||, !</li>
        <li><strong>Assignment Operators:</strong> =, +=, -=, *=, /=, %=</li>
        <li><strong>Bitwise Operators:</strong> &amp;, |, ^, ~, &lt;&lt;, &gt;&gt;, &gt;&gt;&gt;</li>
        <li><strong>Ternary Operator:</strong> ? :</li>
      </ul>
      <h3>Precedence and Associativity Table</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Precedence</th><th>Operator</th><th>Associativity</th></tr>
          <tr><td>1</td><td>(), [], .</td><td>Left to Right</td></tr>
          <tr><td>2</td><td>++x, --x, ~, !</td><td>Right to Left</td></tr>
          <tr><td>3</td><td>*, /, %</td><td>Left to Right</td></tr>
          <tr><td>4</td><td>+, -</td><td>Left to Right</td></tr>
          <tr><td>5</td><td>&lt;&lt;, &gt;&gt;, &gt;&gt;&gt;</td><td>Left to Right</td></tr>
          <tr><td>6</td><td>&lt;, &lt;=, &gt;, &gt;=</td><td>Left to Right</td></tr>
          <tr><td>7</td><td>==, !=</td><td>Left to Right</td></tr>
          <tr><td>8</td><td>&amp;</td><td>Left to Right</td></tr>
          <tr><td>9</td><td>^</td><td>Left to Right</td></tr>
          <tr><td>10</td><td>|</td><td>Left to Right</td></tr>
          <tr><td>11</td><td>&amp;&amp;</td><td>Left to Right</td></tr>
          <tr><td>12</td><td>||</td><td>Left to Right</td></tr>
          <tr><td>13</td><td>? :</td><td>Right to Left</td></tr>
          <tr><td>14</td><td>=, +=, -=, *=, /=, %=</td><td>Right to Left</td></tr>
        </table>
      </div>
      <h3>Example Programs</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">OperatorDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">int</span> a = <span class="hl-number">10</span>, b = <span class="hl-number">20</span>;
              <span class="hl-type">IO</span>.println(<span class="hl-string">"a + b = "</span> + (a + b));   <span class="hl-comment">// 30</span>
              <span class="hl-type">IO</span>.println(<span class="hl-string">"a > b = "</span> + (a &gt; b));   <span class="hl-comment">// false</span>
              <span class="hl-type">IO</span>.println(<span class="hl-string">"a &amp;&amp; b = "</span> + (a &gt; <span class="hl-number">0</span> &amp;&amp; b &gt; <span class="hl-number">0</span>)); <span class="hl-comment">// true</span>
              <span class="hl-type">IO</span>.println(<span class="hl-string">"Ternary: "</span> + (a &gt; b ? <span class="hl-string">"A is greater"</span> : <span class="hl-string">"B is greater"</span>));
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // STATIC FACTORY METHOD (Expanded Detailed)
  // ================================================================
  {
    id: 'static-factory-method-expanded',
    title: 'Static Factory Method (Expanded)',
    icon: 'fas fa-industry',
    category: 'OOP',
    content: `
      <h2>Static Factory Method - Expanded</h2>
      <p>A static factory method is used to create objects with better naming and flexibility. It is a static method that returns an instance of the class.</p>
      <h3>Key Advantages</h3>
      <ul>
        <li>Better naming (e.g., getInstance(), createInstance())</li>
        <li>Can return subclasses (polymorphism)</li>
        <li>Can cache objects (singleton pattern)</li>
      </ul>
      <h3>Example: Book Class with Static Factory Method</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Book.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Book</span> {
              <span class="hl-keyword">private</span> String title;
              <span class="hl-keyword">private</span> String author;
              
              <span class="hl-keyword">private</span> <span class="hl-type">Book</span>(String title, String author) {
                  <span class="hl-keyword">this</span>.title = title;
                  <span class="hl-keyword">this</span>.author = author;
              }
              
              <span class="hl-comment">// Static factory method</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-type">Book</span> <span class="hl-method">getBookObject</span>(String title, String author) {
                  <span class="hl-keyword">return</span> <span class="hl-keyword">new</span> <span class="hl-type">Book</span>(title, author);
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">greet</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Thank You for choosing this book"</span>);
              }
          }
        </code></pre>
      </div>
      <h3>Usage in Main</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Main.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">package</span> com.ravi.elc;
          <span class="hl-keyword">import</span> com.ravi.blc.Book;
          
          <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Main</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
                  String title = <span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter the Title of the Book: "</span>);
                  String author = <span class="hl-type">IO</span>.<span class="hl-method">readln</span>(<span class="hl-string">"Enter the Author of the Book: "</span>);
                  Book book = Book.<span class="hl-method">getBookObject</span>(title, author);
                  book.<span class="hl-method">greet</span>();
              }
          }
        </code></pre>
      </div>
      <h3>Another Example: Product with Validation</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Product.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Product</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">int</span> id;
              <span class="hl-keyword">private</span> String name;
              <span class="hl-keyword">private</span> <span class="hl-type">double</span> price;
              
              <span class="hl-keyword">private</span> <span class="hl-type">Product</span>(<span class="hl-type">int</span> id, String name, <span class="hl-type">double</span> price) {
                  <span class="hl-keyword">this</span>.id = id;
                  <span class="hl-keyword">this</span>.name = name;
                  <span class="hl-keyword">this</span>.price = price;
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-type">Product</span> <span class="hl-method">createProduct</span>(<span class="hl-type">int</span> id, String name, <span class="hl-type">double</span> price) {
                  <span class="hl-keyword">if</span>(id &lt;= <span class="hl-number">0</span>) <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">IllegalArgumentException</span>(<span class="hl-string">"Invalid ID"</span>);
                  <span class="hl-keyword">if</span>(name == <span class="hl-keyword">null</span>) <span class="hl-keyword">throw</span> <span class="hl-keyword">new</span> <span class="hl-type">NullPointerException</span>(<span class="hl-string">"Name required"</span>);
                  <span class="hl-keyword">return</span> <span class="hl-keyword">new</span> <span class="hl-type">Product</span>(id, name, price);
              }
          }
        </code></pre>
      </div>
    `
  },
  // ================================================================
  // ABSTRACT CLASS (Detailed from PDF)
  // ================================================================
  {
    id: 'abstract-class',
    title: 'Abstract Class',
    icon: 'fas fa-layer-group',
    category: 'OOP',
    content: `
      <h2>What is an Abstract Class?</h2>
      <p>An abstract class is a class that is declared with the <strong>abstract keyword</strong>. It can contain both abstract methods (without body) and concrete methods (with body).</p>
      
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Key Points:</div>
          <p>1. We cannot create an object for an abstract class.<br>
          2. It can have constructors.<br>
          3. It can have static methods.<br>
          4. It can have final methods.<br>
          5. It can have instance variables.</p>
        </div>
      </div>

      <h3>Example: Abstract Class with Abstract Method</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Payment.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">abstract</span> <span class="hl-keyword">class</span> <span class="hl-type">Payment</span> {
              <span class="hl-keyword">protected</span> <span class="hl-type">double</span> amount;
              
              <span class="hl-keyword">public</span> <span class="hl-type">Payment</span>(<span class="hl-type">double</span> amount) {
                  <span class="hl-keyword">this</span>.amount = amount;
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">getReceipt</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Receipt generated for amount: "</span> + amount);
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">abstract</span> <span class="hl-keyword">void</span> <span class="hl-method">makePayment</span>();
          }
        </code></pre>
      </div>

      <h3>Subclass Implementation</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">UPI.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">UPI</span> <span class="hl-keyword">extends</span> <span class="hl-type">Payment</span> {
              <span class="hl-keyword">public</span> <span class="hl-type">UPI</span>(<span class="hl-type">double</span> amount) {
                  <span class="hl-keyword">super</span>(amount);
              }
              
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">makePayment</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"UPI Payment of "</span> + amount + <span class="hl-string">" completed"</span>);
                  <span class="hl-method">getReceipt</span>();
              }
          }
        </code></pre>
      </div>

      <h3>Abstract Class with Constructor & Static Members</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Vehicle.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">abstract</span> <span class="hl-keyword">class</span> <span class="hl-type">Vehicle</span> {
              <span class="hl-keyword">protected</span> String name;
              <span class="hl-keyword">static</span> <span class="hl-type">int</span> count = <span class="hl-number">0</span>;
              
              <span class="hl-keyword">public</span> <span class="hl-type">Vehicle</span>(String name) {
                  <span class="hl-keyword">this</span>.name = name;
                  count++;
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">showCount</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Total vehicles created: "</span> + count);
              }
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">abstract</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>();
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Car</span> <span class="hl-keyword">extends</span> <span class="hl-type">Vehicle</span> {
              <span class="hl-keyword">public</span> <span class="hl-type">Car</span>(String name) {
                  <span class="hl-keyword">super</span>(name);
              }
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                  <span class="hl-type">IO</span>.println(name + <span class="hl-string">" is running"</span>);
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // INTERFACE (Detailed from PDF)
  // ================================================================
  {
    id: 'interface',
    title: 'Interface',
    icon: 'fas fa-plug',
    category: 'OOP',
    content: `
      <h2>What is an Interface?</h2>
      <p>An interface is a blueprint of a class that contains abstract methods, default methods, static methods, and constant variables. It defines <strong>"WHAT TO DO"</strong> but not <strong>"HOW TO DO"</strong>.</p>
      
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Key Points:</div>
          <p>1. All variables in an interface are <strong>public static final</strong>.<br>
          2. All methods are <strong>public abstract</strong> (before Java 8).<br>
          3. Since Java 8, we can have <strong>default</strong> and <strong>static</strong> methods.<br>
          4. An interface cannot be instantiated.<br>
          5. A class can implement multiple interfaces.<br>
          6. An interface can extend another interface.</p>
        </div>
      </div>

      <h3>Basic Interface Example</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">Moveable.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">interface</span> <span class="hl-type">Moveable</span> {
              <span class="hl-type">int</span> SPEED = <span class="hl-number">90</span>;  <span class="hl-comment">// public static final</span>
              <span class="hl-keyword">void</span> <span class="hl-method">move</span>();  <span class="hl-comment">// public abstract</span>
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Car</span> <span class="hl-keyword">implements</span> <span class="hl-type">Moveable</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">move</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Car is moving with "</span> + SPEED + <span class="hl-string">" KM/HR"</span>);
              }
          }
        </code></pre>
      </div>

      <h3>Default Method (Java 8+)</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">DefaultMethod.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">interface</span> <span class="hl-type">Movable2</span> {
              <span class="hl-keyword">default</span> <span class="hl-keyword">void</span> <span class="hl-method">printSpeed</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Default speed is 100"</span>);
              }
              <span class="hl-keyword">void</span> <span class="hl-method">move</span>();
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Bike</span> <span class="hl-keyword">implements</span> <span class="hl-type">Movable2</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">move</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Bike is moving"</span>);
              }
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Main</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
                  <span class="hl-type">Movable2</span> m = <span class="hl-keyword">new</span> <span class="hl-type">Bike</span>();
                  m.<span class="hl-method">move</span>();
                  m.<span class="hl-method">printSpeed</span>();  <span class="hl-comment">// Default method called</span>
              }
          }
        </code></pre>
      </div>

      <h3>Static Method in Interface (Java 8+)</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StaticInterface.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">interface</span> <span class="hl-type">Calculator</span> {
              <span class="hl-keyword">static</span> <span class="hl-type">int</span> <span class="hl-method">add</span>(<span class="hl-type">int</span> a, <span class="hl-type">int</span> b) {
                  <span class="hl-keyword">return</span> a + b;
              }
              <span class="hl-type">int</span> <span class="hl-method">multiply</span>(<span class="hl-type">int</span> a, <span class="hl-type">int</span> b);
          }
          
          <span class="hl-comment">// Usage</span>
          <span class="hl-type">IO</span>.println(Calculator.<span class="hl-method">add</span>(<span class="hl-number">5</span>, <span class="hl-number">3</span>));  <span class="hl-comment">// 8</span>
        </code></pre>
      </div>

      <h3>Multiple Inheritance using Interface</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MultipleInheritance.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">interface</span> <span class="hl-type">Alpha</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">m1</span>();
          }
          <span class="hl-keyword">interface</span> <span class="hl-type">Beta</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">m2</span>();
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Impl</span> <span class="hl-keyword">implements</span> <span class="hl-type">Alpha</span>, <span class="hl-type">Beta</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">m1</span>() { <span class="hl-type">IO</span>.println(<span class="hl-string">"m1 from Alpha"</span>); }
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">m2</span>() { <span class="hl-type">IO</span>.println(<span class="hl-string">"m2 from Beta"</span>); }
          }
          
          <span class="hl-comment">// Usage</span>
          <span class="hl-type">Impl</span> obj = <span class="hl-keyword">new</span> <span class="hl-type">Impl</span>();
          obj.<span class="hl-method">m1</span>();
          obj.<span class="hl-method">m2</span>();
        </code></pre>
      </div>

      <h3>Interface Extending Another Interface</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ExtendInterface.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">interface</span> <span class="hl-type">A</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">m1</span>();
          }
          <span class="hl-keyword">interface</span> <span class="hl-type">B</span> <span class="hl-keyword">extends</span> <span class="hl-type">A</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">m2</span>();
          }
          
          <span class="hl-keyword">class</span> <span class="hl-type">Impl</span> <span class="hl-keyword">implements</span> <span class="hl-type">B</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">m1</span>() { <span class="hl-type">IO</span>.println(<span class="hl-string">"m1"</span>); }
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">m2</span>() { <span class="hl-type">IO</span>.println(<span class="hl-string">"m2"</span>); }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // OBJECT CLASS METHODS (Detailed from PDF)
  // ================================================================
  {
    id: 'object-class-methods-detailed',
    title: 'Object Class Methods (Detailed)',
    icon: 'fas fa-object-group',
    category: 'Advanced Java',
    content: `
      <h2>Object Class</h2>
      <p>Object is the superclass of all classes in Java. Every class inherits from Object class.</p>
      <p>Object class contains 11 non-static methods which are related to an object.</p>
      
      <h3>1. getClass() method</h3>
      <p>It returns the runtime class information of an object. It gives the fully qualified name (package + class name).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">GetClassDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Test</span> { }
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">Test</span> t = <span class="hl-keyword">new</span> <span class="hl-type">Test</span>();
              <span class="hl-type">IO</span>.println(t.<span class="hl-method">getClass</span>());  <span class="hl-comment">// class Test</span>
          }
        </code></pre>
      </div>

      <h3>2. hashCode() method</h3>
      <p>It returns a unique integer for the object. Used in HashTable data structures to find the appropriate bucket location.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">HashCodeDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Test</span> { }
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">Test</span> t = <span class="hl-keyword">new</span> <span class="hl-type">Test</span>();
              <span class="hl-type">IO</span>.println(t.<span class="hl-method">hashCode</span>());  <span class="hl-comment">// unique integer</span>
          }
        </code></pre>
      </div>

      <h3>3. toString() method</h3>
      <p>It returns a string representation of the object (representing all non-static fields in a String format).</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ToStringDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Student</span> {
              <span class="hl-type">int</span> id;
              String name;
              <span class="hl-type">Student</span>(<span class="hl-type">int</span> id, String name) {
                  <span class="hl-keyword">this</span>.id = id;
                  <span class="hl-keyword">this</span>.name = name;
              }
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> String <span class="hl-method">toString</span>() {
                  <span class="hl-keyword">return</span> <span class="hl-string">"Student [id="</span> + id + <span class="hl-string">", name="</span> + name + <span class="hl-string">"]"</span>;
              }
          }
          
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">Student</span> s = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>(<span class="hl-number">101</span>, <span class="hl-string">"Scott"</span>);
              <span class="hl-type">IO</span>.println(s);  <span class="hl-comment">// Student [id=101, name=Scott]</span>
          }
        </code></pre>
      </div>

      <h3>4. equals() method</h3>
      <p>Used to compare two objects. Default implementation compares references (memory address). We can override for content comparison.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">EqualsDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Student</span> {
              <span class="hl-type">int</span> id;
              String name;
              <span class="hl-type">Student</span>(<span class="hl-type">int</span> id, String name) {
                  <span class="hl-keyword">this</span>.id = id;
                  <span class="hl-keyword">this</span>.name = name;
              }
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public</span> <span class="hl-keyword">boolean</span> <span class="hl-method">equals</span>(Object obj) {
                  <span class="hl-keyword">if</span>(<span class="hl-keyword">this</span> == obj) <span class="hl-keyword">return</span> <span class="hl-keyword">true</span>;
                  <span class="hl-keyword">if</span>(obj == <span class="hl-keyword">null</span> || <span class="hl-method">getClass</span>() != obj.<span class="hl-method">getClass</span>()) <span class="hl-keyword">return</span> <span class="hl-keyword">false</span>;
                  <span class="hl-type">Student</span> s = (<span class="hl-type">Student</span>) obj;
                  <span class="hl-keyword">return</span> id == s.id &amp;&amp; name.<span class="hl-method">equals</span>(s.name);
              }
          }
          
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">Student</span> s1 = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>(<span class="hl-number">101</span>, <span class="hl-string">"Scott"</span>);
              <span class="hl-type">Student</span> s2 = <span class="hl-keyword">new</span> <span class="hl-type">Student</span>(<span class="hl-number">101</span>, <span class="hl-string">"Scott"</span>);
              <span class="hl-type">IO</span>.println(s1.<span class="hl-method">equals</span>(s2));  <span class="hl-comment">// true (because we overrode equals)</span>
          }
        </code></pre>
      </div>
    `
  },
  // ================================================================
  // MULTITHREADING (Detailed from PDF)
  // ================================================================
  {
    id: 'multithreading',
    title: 'Multithreading',
    icon: 'fas fa-tasks',
    category: 'Advanced Java',
    content: `
      <h2>Multithreading in Java</h2>
      <p>Multithreading is a Java feature that allows concurrent execution of two or more threads for maximum utilization of CPU.</p>
      
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Key Points:</div>
          <p>1. Each thread runs independently.<br>
          2. Threads share the same memory space.<br>
          3. Multithreading improves performance and responsiveness.<br>
          4. Threads have priority (1 to 10).</p>
        </div>
      </div>

      <h3>Ways to Create Threads</h3>
      <ol>
        <li>1. Extending Thread class</li>
        <li>2. Implementing Runnable interface</li>
        <li>3. Using Executor framework (Java 5+)</li>
      </ol>

      <h3>1. Extending Thread Class</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MyThread.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">MyThread</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                  <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= <span class="hl-number">5</span>; i++) {
                      <span class="hl-type">IO</span>.println(<span class="hl-string">"Thread: "</span> + i);
                      <span class="hl-keyword">try</span> { Thread.<span class="hl-method">sleep</span>(<span class="hl-number">1000</span>); } <span class="hl-keyword">catch</span>(InterruptedException e) {}
                  }
              }
          }
          
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">MyThread</span> t = <span class="hl-keyword">new</span> <span class="hl-type">MyThread</span>();
              t.<span class="hl-method">start</span>();  <span class="hl-comment">// starts the thread</span>
              <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i = <span class="hl-number">1</span>; i &lt;= <span class="hl-number">5</span>; i++) {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Main: "</span> + i);
                  <span class="hl-keyword">try</span> { Thread.<span class="hl-method">sleep</span>(<span class="hl-number">500</span>); } <span class="hl-keyword">catch</span>(InterruptedException e) {}
              }
          }
        </code></pre>
      </div>

      <h3>2. Implementing Runnable Interface</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">MyRunnable.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">MyRunnable</span> <span class="hl-keyword">implements</span> <span class="hl-type">Runnable</span> {
              <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                  <span class="hl-type">IO</span>.println(<span class="hl-string">"Runnable thread is running"</span>);
              }
          }
          
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              <span class="hl-type">MyRunnable</span> r = <span class="hl-keyword">new</span> <span class="hl-type">MyRunnable</span>();
              <span class="hl-type">Thread</span> t = <span class="hl-keyword">new</span> <span class="hl-type">Thread</span>(r);
              t.<span class="hl-method">start</span>();
          }
        </code></pre>
      </div>

      <h3>Thread Synchronization</h3>
      <p>Synchronization is used to control access to shared resources by multiple threads.</p>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">SynchronizedDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">class</span> <span class="hl-type">Counter</span> {
              <span class="hl-keyword">private</span> <span class="hl-type">int</span> count = <span class="hl-number">0</span>;
              
              <span class="hl-keyword">public</span> <span class="hl-keyword">synchronized</span> <span class="hl-keyword">void</span> <span class="hl-method">increment</span>() {
                  count++;
              }
              <span class="hl-keyword">public</span> <span class="hl-keyword">synchronized</span> <span class="hl-type">int</span> <span class="hl-method">getCount</span>() {
                  <span class="hl-keyword">return</span> count;
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // COLLECTIONS FRAMEWORK (Detailed from PDF)
  // ================================================================
  {
    id: 'collections',
    title: 'Collections Framework',
    icon: 'fas fa-layer-group',
    category: 'Advanced Java',
    content: `
      <h2>Collections Framework in Java</h2>
      <p>The Collections Framework provides a set of interfaces and classes to store and manipulate groups of objects.</p>
      
      <div class="info-box note">
        <i class="fas fa-info-circle"></i>
        <div>
          <div class="info-title">Key Interfaces:</div>
          <p>1. <strong>Collection:</strong> Root interface<br>
          2. <strong>List:</strong> Ordered collection (ArrayList, LinkedList)<br>
          3. <strong>Set:</strong> No duplicates (HashSet, TreeSet)<br>
          4. <strong>Map:</strong> Key-value pairs (HashMap, TreeMap)<br>
          5. <strong>Queue:</strong> FIFO (PriorityQueue)</p>
        </div>
      </div>

      <h3>Common Collection Classes</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Interface</th><th>Implementation</th><th>Description</th></tr>
          <tr><td>List</td><td>ArrayList</td><td>Resizable array, fast access</td></tr>
          <tr><td>List</td><td>LinkedList</td><td>Doubly-linked list, fast insertion/deletion</td></tr>
          <tr><td>Set</td><td>HashSet</td><td>Hash table, no duplicates</td></tr>
          <tr><td>Set</td><td>TreeSet</td><td>Sorted set</td></tr>
          <tr><td>Map</td><td>HashMap</td><td>Hash table, key-value pairs</td></tr>
          <tr><td>Map</td><td>TreeMap</td><td>Sorted map</td></tr>
          <tr><td>Queue</td><td>PriorityQueue</td><td>Priority-based queue</td></tr>
        </table>
      </div>

      <h3>ArrayList Example</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">ArrayListDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">import</span> java.util.*;
          
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              List&lt;String&gt; list = <span class="hl-keyword">new</span> <span class="hl-type">ArrayList</span>&lt;&gt;();
              list.<span class="hl-method">add</span>(<span class="hl-string">"Java"</span>);
              list.<span class="hl-method">add</span>(<span class="hl-string">"Python"</span>);
              list.<span class="hl-method">add</span>(<span class="hl-string">"C++"</span>);
              
              <span class="hl-comment">// Iterate</span>
              <span class="hl-keyword">for</span>(String lang : list) {
                  <span class="hl-type">IO</span>.println(lang);
              }
              
              <span class="hl-comment">// Access</span>
              <span class="hl-type">IO</span>.println(list.<span class="hl-method">get</span>(<span class="hl-number">0</span>));  <span class="hl-comment">// Java</span>
              <span class="hl-type">IO</span>.println(list.<span class="hl-method">size</span>());  <span class="hl-comment">// 3</span>
              
              <span class="hl-comment">// Remove</span>
              list.<span class="hl-method">remove</span>(<span class="hl-number">1</span>);
          }
        </code></pre>
      </div>

      <h3>HashMap Example</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">HashMapDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">import</span> java.util.*;
          
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              Map&lt;String, Integer&gt; map = <span class="hl-keyword">new</span> <span class="hl-type">HashMap</span>&lt;&gt;();
              map.<span class="hl-method">put</span>(<span class="hl-string">"One"</span>, <span class="hl-number">1</span>);
              map.<span class="hl-method">put</span>(<span class="hl-string">"Two"</span>, <span class="hl-number">2</span>);
              map.<span class="hl-method">put</span>(<span class="hl-string">"Three"</span>, <span class="hl-number">3</span>);
              
              <span class="hl-comment">// Access</span>
              <span class="hl-type">IO</span>.println(map.<span class="hl-method">get</span>(<span class="hl-string">"One"</span>));  <span class="hl-comment">// 1</span>
              
              <span class="hl-comment">// Iterate</span>
              <span class="hl-keyword">for</span>(Map.Entry&lt;String, Integer&gt; entry : map.<span class="hl-method">entrySet</span>()) {
                  <span class="hl-type">IO</span>.println(entry.<span class="hl-method">getKey</span>() + <span class="hl-string">" -> "</span> + entry.<span class="hl-method">getValue</span>());
              }
          }
        </code></pre>
      </div>

      <h3>HashSet Example</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">HashSetDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-keyword">import</span> java.util.*;
          
          <span class="hl-keyword">void</span> <span class="hl-method">main</span>() {
              Set&lt;String&gt; set = <span class="hl-keyword">new</span> <span class="hl-type">HashSet</span>&lt;&gt;();
              set.<span class="hl-method">add</span>(<span class="hl-string">"Java"</span>);
              set.<span class="hl-method">add</span>(<span class="hl-string">"Python"</span>);
              set.<span class="hl-method">add</span>(<span class="hl-string">"Java"</span>);  <span class="hl-comment">// duplicate not added</span>
              
              <span class="hl-comment">// Iterate (order not guaranteed)</span>
              <span class="hl-keyword">for</span>(String lang : set) {
                  <span class="hl-type">IO</span>.println(lang);
              }
          }
        </code></pre>
      </div>
    `
  },

  // ================================================================
  // STRING BUILDER & STRING BUFFER (if in PDF)
  // ================================================================
  {
    id: 'string-builder-buffer',
    title: 'String Builder & String Buffer',
    icon: 'fas fa-tools',
    category: 'Core Java Basics',
    content: `
      <h2>String Builder & String Buffer</h2>
      <p>Both are mutable classes used for string manipulation.</p>
      
      <h3>Difference between StringBuilder and StringBuffer</h3>
      <div class="table-responsive">
        <table>
          <tr><th>Feature</th><th>StringBuffer</th><th>StringBuilder</th></tr>
          <tr><td>Thread Safety</td><td>Synchronized (Thread-safe)</td><td>Not synchronized (Not thread-safe)</td></tr>
          <tr><td>Performance</td><td>Slower</td><td>Faster</td></tr>
          <tr><td>Java Version</td><td>Since Java 1.0</td><td>Since Java 5</td></tr>
        </table>
      </div>

      <h3>Example</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-filename">StringBuilderDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
        <pre><code>
          <span class="hl-type">StringBuilder</span> sb = <span class="hl-keyword">new</span> <span class="hl-type">StringBuilder</span>(<span class="hl-string">"Hello"</span>);
          sb.<span class="hl-method">append</span>(<span class="hl-string">" World"</span>);
          <span class="hl-type">IO</span>.println(sb);  <span class="hl-comment">// Hello World</span>
          
          sb.<span class="hl-method">insert</span>(<span class="hl-number">5</span>, <span class="hl-string">","</span>);
          <span class="hl-type">IO</span>.println(sb);  <span class="hl-comment">// Hello, World</span>
          
          sb.<span class="hl-method">reverse</span>();
          <span class="hl-type">IO</span>.println(sb);  <span class="hl-comment">// dlroW ,olleH</span>
        </code></pre>
      </div>
    `
  },

  {
    id: 'multithreading-basics',
    title: 'Multithreading Basics',
    icon: 'fas fa-tasks',
    category: 'Multithreading',
    content: `
    <h2>Multithreading</h2>
    <p>A Processor (CPU) can execute one task at a time.</p>

    <h3>Uniprocessing</h3>
    <ul>
      <li>In uniprocessing, CPU can execute only one process at a time.</li>
      <li>It is <strong>non-preemptive</strong> CPU scheduling.</li>
    </ul>
    <p><strong>Drawbacks are:</strong></p>
    <ol>
      <li>Memory is waste.</li>
      <li>Resources are waste.</li>
      <li>Most of the time, CPU is sitting alone without any task (idle).</li>
    </ol>

    <h3>Preemptive Scheduling</h3>
    <p>In preemptive scheduling, CPU can be taken away (CPU Switching) from one process to another process without completing the task.</p>

    <h3>Multitasking OR Multiprocessing</h3>
    <p>In order to avoid the drawbacks of Uniprocessing, we introduced multitasking OR Multiprocessing. It is <strong>preemptive scheduling</strong>.</p>
    <p>Multitasking OR Multiprocessing is divided into two types:</p>
    <ol>
      <li><strong>Process-based Multitasking</strong></li>
      <li><strong>Thread-based Multitasking</strong></li>
    </ol>

    <h3>1) Process-based Multitasking</h3>
    <p>If a CPU will switch (move) from one sub-task of one process to another sub-task of another process then it is called process-based multitasking. It is a costly operation because the process address, resources, memory will be automatically changed.</p>

    <h3>2) Thread-based Multitasking</h3>
    <p>If the CPU will switch from one sub-task (thread) of one process to another sub-task of the same process then it is called Thread-based multitasking. It is a lightweight operation because the process address, resources, memory everything will remain the same.</p>

    <h2>What is a Thread in Java?</h2>
    <ul>
      <li>A thread is a lightweight process which can run concurrently with another thread within the same process.</li>
      <li>A thread is the basic unit of CPU which is well known for "Independent Execution".</li>
      <li>The main purpose of thread is to execute the given task concurrently to boost up the execution of the program.</li>
      <li>In Java, whenever we write main() method then internally JVM provides one thread to us for synchronous execution of java program.</li>
      <li>The name of this thread is: <strong>"main thread"</strong> and it is executing under a group called <strong>"main group"</strong>.</li>
      <li>The purpose of this main thread is to execute the entire main method from top to bottom in a synchronous manner.</li>
    </ul>

    <h3>WAP to show that main is a thread and the name of this thread is main</h3>
    <p>Whenever we define main method then internally JVM will supply a main thread under main group, the purpose of this main thread to execute the entire main method in a synchronous way. In java there is a predefined class called <code>Thread</code> available in <code>java.lang</code> package, this class contains a predefined static factory method <code>currentThread()</code> which will provide currently executing Thread Object.</p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ThreadName.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ThreadName</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Thread</span> t = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Current thread name is :"</span> + t.<span class="hl-method">getName</span>());  <span class="hl-comment">// main</span>
                
                <span class="hl-comment">// OR (using Method chaining)</span>
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Running thread name is :"</span> + name);  <span class="hl-comment">// main</span>
            }
        }
      </code></pre>
      </div>

        <div class="code-block">
        <div class="code-header">
          <span class="code-filename">Thread Class Hierarchy & Methods</span>
          <button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button>
        </div>
        <pre><code>
          <span class="hl-annotation">@FunctionalInterface</span>
          <span class="hl-keyword">public interface</span> <span class="hl-type">Runnable</span> {
              <span class="hl-keyword">void</span> <span class="hl-method">run</span>();
          }

          <span class="hl-keyword">public class</span> <span class="hl-type">Thread</span> <span class="hl-keyword">implements</span> <span class="hl-type">Runnable</span> {
              <span class="hl-keyword">@Override</span>
              <span class="hl-keyword">public void</span> <span class="hl-method">run</span>() { ... }

              <span class="hl-comment">// Predefined methods of Thread class:</span>
              <span class="hl-method">start</span>();
              <span class="hl-method">currentThread</span>();
              <span class="hl-method">setName</span>(String name);
              <span class="hl-method">getName</span>();
              <span class="hl-method">isAlive</span>();
              <span class="hl-method">sleep</span>(long ms);
              <span class="hl-method">join</span>();
              <span class="hl-method">yield</span>();
              <span class="hl-method">isDaemon</span>();
              <span class="hl-method">setDaemon</span>(boolean on);
              <span class="hl-method">interrupt</span>();
              <span class="hl-method">isInterrupted</span>();
          }
        </code></pre>
    </div>

    <h2>How to create our own custom thread in java</h2>
    <p>We can create our own custom thread by using the following two packages:</p>
    <ul>
      <li>a) By using <code>java.lang</code> package (JDK 1.0V)</li>
      <li>b) By using <code>java.util.concurrent</code> sub package (JDK 1.5V)</li>
    </ul>

    <h3>a) Creation of custom thread by using java.lang package</h3>
    <p>We can create custom thread by using <code>java.lang</code> package in the following two approaches:</p>
    <ol>
      <li>i) By extending <code>java.lang.Thread</code> class</li>
      <li>ii) By implementing <code>java.lang.Runnable</code> interface</li>
    </ol>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">Thread vs Runnable</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">class</span> <span class="hl-type">MyThread</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() { }
        }
        
        <span class="hl-keyword">class</span> <span class="hl-type">MyRunnable</span> <span class="hl-keyword">implements</span> <span class="hl-type">Runnable</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() { }
        }
        
        <span class="hl-comment">// Interface Runnable is a @FunctionalInterface</span>
        <span class="hl-keyword">public</span> <span class="hl-keyword">interface</span> <span class="hl-type">Runnable</span> {
            <span class="hl-keyword">void</span> <span class="hl-method">run</span>();
        }
        
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">Thread</span> <span class="hl-keyword">implements</span> <span class="hl-type">Runnable</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() { }
        }
      </code></pre>
    </div>
  `
  },

  {
    id: 'custom-thread-extending',
    title: 'Custom Thread by Extending Thread',
    icon: 'fas fa-code-branch',
    category: 'Multithreading',
    content: `
    <h2>Creating a custom thread by extending java.lang.Thread class</h2>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">CustomThread.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">class</span> <span class="hl-type">UserThread</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                <span class="hl-comment">//The task which we want to perform using custom thread</span>
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Child thread is running"</span>);
            }
        }
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">CustomThread</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Main thread started!!!"</span>);
                <span class="hl-type">UserThread</span> ut = <span class="hl-keyword">new</span> <span class="hl-type">UserThread</span>();
                ut.<span class="hl-method">start</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Main thread ended!!!"</span>);
            }
        }
      </code></pre>
    </div>
    <p>In the above program, we have two threads, <strong>main thread</strong> which is responsible to execute main method and <strong>Thread-0</strong> thread which is responsible to execute run() method. Here processor is having two threads so, processor can easily switch from one thread (main thread) to child thread (Thread-0 thread).</p>
    <div class="info-box note">
      <i class="fas fa-info-circle"></i>
      <div>
        <div class="info-title">Note:</div>
        <p>In entire Multithreading concept <strong>start()</strong> is the only method which is responsible to create a new thread.</p>
      </div>
    </div>
    <h3>public void start()</h3>
    <ul>
      <li>It is a predefined non-static method of Thread class.</li>
      <li>Internally start() method performs the following two tasks:
        <ol>
          <li>a) It will make a request to the O.S to assign a new thread in a separate stack memory for concurrent execution.</li>
          <li>b) It will internally call the run() method on the current object.</li>
        </ol>
      </li>
    </ul>

    <h3>public final boolean isAlive()</h3>
    <p>As we know when we call start() method then a new thread will be created in a separate Stack Memory. Thread class has provided a predefined final non-static method called isAlive(), return type is boolean. This method is used to verify whether a thread has started or not OR the thread is alive or not. [If the thread started and completed its assigned task then It is NOT alive]</p>
    <p>If we use isAlive() method before the start method then it will return false because Thread has not started yet, on the other hand if we use isAlive() method, after start() method then it will return true but thread should be in running mode.</p>
    <p>In java, We cannot re-start a thread, If we try to re-start then it will generate a runtime exception i.e <code>java.lang.IllegalThreadStateException</code>.</p>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">IsAliveDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">class</span> <span class="hl-type">Test</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Child thread is running"</span>);
                <span class="hl-type">IO</span>.println(<span class="hl-string">"It is running in a separate Stack memory"</span>);
            }
        }
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">IsAliveDemo</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Main Thread started!!!"</span>);
                <span class="hl-type">Test</span> t1 = <span class="hl-keyword">new</span> <span class="hl-type">Test</span>();
                t1.<span class="hl-method">start</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Is Child thread Alive ? "</span>+t1.<span class="hl-method">isAlive</span>());  <span class="hl-comment">// true</span>
                t1.<span class="hl-method">start</span>();  <span class="hl-comment">//java.lang.IllegalThreadStateException</span>
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Main Thread ended!!!"</span>);
            }
        }
      </code></pre>
    </div>

    <h3>Exception in main thread</h3>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">ExceptionDemo.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">class</span> <span class="hl-type">Foo</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Running thread name is :"</span>+name);
            }
        }
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ExceptionDemo</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Main thread started"</span>);
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Current thread name is :"</span>+name);
                <span class="hl-type">Foo</span> f1 = <span class="hl-keyword">new</span> <span class="hl-type">Foo</span>();
                f1.<span class="hl-method">start</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-number">10</span>/<span class="hl-number">0</span>);
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Main thread ended"</span>);
            }
        }
      </code></pre>
    </div>
    <div class="info-box note">
      <i class="fas fa-info-circle"></i>
      <div>
        <div class="info-title">Note:</div>
        <p>Here main thread is interrupted due to ArithmeticException but still child thread will be executed because child thread is executing with separate Stack.</p>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">ThreadLoop.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">class</span> <span class="hl-type">Sample</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i=<span class="hl-number">1</span>; i&lt;=<span class="hl-number">10</span>; i++) {
                    <span class="hl-type">IO</span>.println(i+<span class="hl-string">" by "</span>+name+<span class="hl-string">" thread"</span>);
                }
            }
        }
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ThreadLoop</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Sample</span> s = <span class="hl-keyword">new</span> <span class="hl-type">Sample</span>();
                s.<span class="hl-method">start</span>();
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i=<span class="hl-number">1</span>; i&lt;=<span class="hl-number">10</span>; i++) {
                    <span class="hl-type">IO</span>.println(i+<span class="hl-string">" by "</span>+name+<span class="hl-string">" thread!!!"</span>);
                }
                <span class="hl-type">int</span> i=<span class="hl-number">1</span>;
                <span class="hl-keyword">do</span> {
                    <span class="hl-type">IO</span>.println(<span class="hl-string">"Java Multithreading "</span>);
                    i++;
                } <span class="hl-keyword">while</span>(i&lt;=<span class="hl-number">10</span>);
            }
        }
      </code></pre>
    </div>

    <div class="info-box note">
      <i class="fas fa-info-circle"></i>
      <div>
        <div class="info-title">Note:</div>
        <p>Here processor is frequently switching from main thread to Thread-0 thread so output is un-predictable. We have something called <strong>Thread Scheduler</strong> which is responsible to schedule the thread that means it is scheduler who will decide which thread will get the processor time.</p>
      </div>
    </div>

    <h3>Can a running thread be suspended by Thread Scheduler?</h3>
    <p>Yes, because thread scheduler is responsible to schedule the Thread so, all the threads will get the processor time.</p>

    <div class="info-box note">
      <i class="fas fa-info-circle"></i>
      <div>
        <div class="info-title">Note:</div>
        <p>The Currently executing instruction of a running thread is stored in <strong>PC register</strong>.</p>
      </div>
    </div>
  `
  },

  {
    id: 'thread-name-setget',
    title: 'How to Set and Get the Name of the Thread',
    icon: 'fas fa-tag',
    category: 'Multithreading',
    content: `
    <h2>How to set and get the name of the Thread</h2>
    <p>Whenever we create a userdefined Thread in java then by default JVM assigns the name of thread is <strong>Thread-0, Thread-1, Thread-2</strong> and so on. If a user wants to assign some user defined name of the Thread, then Thread class has provided a predefined method called <strong>setName(String name)</strong> to set the name of the Thread. On the other hand we want to get the name of the Thread then Thread class has provided a predefined method called <strong>getName()</strong>.</p>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">Thread.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">class</span> <span class="hl-type">Thread</span> <span class="hl-keyword">implements</span> <span class="hl-type">Runnable</span> {
            <span class="hl-keyword">private</span> <span class="hl-keyword">volatile</span> String name;
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">final</span> <span class="hl-keyword">synchronized</span> <span class="hl-keyword">void</span> <span class="hl-method">setName</span>(String name) <span class="hl-comment">//setter</span>
            {
                <span class="hl-keyword">this</span>.name = name;
            }
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">final</span> String <span class="hl-method">getName</span>() <span class="hl-comment">//getter</span>
            {
                <span class="hl-keyword">return</span> <span class="hl-keyword">this</span>.name;
            }
        }
      </code></pre>
    </div>

    <h3>public final long threadId()</h3>
    <ul>
      <li>It is a new method which introduced from <strong>JDK 19V</strong>, Actually before threadId() method we had getIId() method to get the id of the thread but this method is not final so this method is deprecated from JDK 19V and instead of getId() now we have threadId() method which is a final method.</li>
      <li>Both the methods are used to provide the id of the current thread.</li>
    </ul>

    <hr>

    <h3>Programs:</h3>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">ThreadName1.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">class</span> <span class="hl-type">DoStuff</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Running Thread name is :"</span>+name);
            }
        }
        
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ThreadName1</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Current thread name is :"</span>+name);
                
                <span class="hl-type">DoStuff</span> d1 = <span class="hl-keyword">new</span> <span class="hl-type">DoStuff</span>();
                <span class="hl-type">DoStuff</span> d2 = <span class="hl-keyword">new</span> <span class="hl-type">DoStuff</span>();
                d1.<span class="hl-method">start</span>();
                d2.<span class="hl-method">start</span>();
            }
        }
      </code></pre>
    </div>
    <div class="info-box note">
      <i class="fas fa-info-circle"></i>
      <div>
        <div class="info-title">Note:</div>
        <p>We are not providing the user-defined names so by default the name of thread would be Thread-0, Thread-1.</p>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">ThreadName2.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">class</span> <span class="hl-type">Demo</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                <span class="hl-type">Thread</span> t = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>();
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Running thread name is :"</span>+t.<span class="hl-method">getName</span>());
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Child thread id is :"</span>+t.<span class="hl-method">getId</span>()); <span class="hl-comment">//Deprecated JDK 19V</span>
                <span class="hl-type">IO</span>.println(<span class="hl-string">"New Method for thread id (child):"</span>+t.<span class="hl-method">threadId</span>());
            }
        }
        
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ThreadName2</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Thread</span> t = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>();
                
                <span class="hl-type">Demo</span> d1 = <span class="hl-keyword">new</span> <span class="hl-type">Demo</span>();
                <span class="hl-type">Demo</span> d2 = <span class="hl-keyword">new</span> <span class="hl-type">Demo</span>();
                
                d1.<span class="hl-method">setName</span>(<span class="hl-string">"Child1"</span>);
                d2.<span class="hl-method">setName</span>(<span class="hl-string">"Child2"</span>);
                
                d1.<span class="hl-method">start</span>();
                d2.<span class="hl-method">start</span>();
                
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Current thread name is :"</span>+t.<span class="hl-method">getName</span>());
                <span class="hl-type">IO</span>.println(<span class="hl-string">"Main thread id is :"</span>+t.<span class="hl-method">getId</span>()); <span class="hl-comment">//Deprecated JDK 19V</span>
                <span class="hl-type">IO</span>.println(<span class="hl-string">"New Method for thread id (main) :"</span>+t.<span class="hl-method">threadId</span>());
            }
        }
      </code></pre>
    </div>
    <div class="info-box note">
      <i class="fas fa-info-circle"></i>
      <div>
        <div class="info-title">Note:</div>
        <p>Here we are providing the user-defined name i.e child1 and child2 for both the user-defined thread. getId() and threadId() both are used to find the id of the respective thread.</p>
      </div>
    </div>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">ThreadName3.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.basic;
        <span class="hl-keyword">import</span> java.util.InputMismatchException;
        <span class="hl-keyword">import</span> java.util.Scanner;
        
        <span class="hl-keyword">class</span> <span class="hl-type">BatchAssignment</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>().<span class="hl-method">toLowerCase</span>();
                <span class="hl-keyword">if</span>(name != <span class="hl-keyword">null</span> &amp;&amp; name.<span class="hl-method">equals</span>(<span class="hl-string">"placement"</span>)) {
                    <span class="hl-keyword">this</span>.<span class="hl-method">placementBatch</span>();
                }
                <span class="hl-keyword">else</span> <span class="hl-keyword">if</span>(name != <span class="hl-keyword">null</span> &amp;&amp; name.<span class="hl-method">equals</span>(<span class="hl-string">"regular"</span>)) {
                    <span class="hl-keyword">this</span>.<span class="hl-method">regularBatch</span>();
                }
            }
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">placementBatch</span>() {
                <span class="hl-type">System</span>.out.println(<span class="hl-string">"I am a placement batch student."</span>);
            }
            
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">regularBatch</span>() {
                <span class="hl-type">System</span>.out.println(<span class="hl-string">"I am a Regular batch student."</span>);
            }
        }
        
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">ThreadName3</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Scanner</span> sc = <span class="hl-keyword">new</span> <span class="hl-type">Scanner</span>(<span class="hl-type">System</span>.in);
                <span class="hl-keyword">try</span>(sc) {
                    <span class="hl-type">System</span>.out.print(<span class="hl-string">"Enter your Batch Title [Placement/Regular] :"</span>);
                    String title = sc.<span class="hl-method">next</span>();
                    <span class="hl-type">BatchAssignment</span> b = <span class="hl-keyword">new</span> <span class="hl-type">BatchAssignment</span>();
                    b.<span class="hl-method">setName</span>(title);
                    b.<span class="hl-method">start</span>();
                } <span class="hl-keyword">catch</span>(<span class="hl-type">InputMismatchException</span> e) {
                    <span class="hl-type">System</span>.out.println(<span class="hl-string">"Invalid Input"</span>);
                }
            }
        }
      </code></pre>
    </div>

    <hr>

    <h2>public static void sleep(long millisecond) throws InterruptedException</h2>
    <p>sleep() is a predefined static method of Thread class which accepts long ms as a parameter. The main purpose of sleep method to put a thread into temporarily waiting state OR sleeping state, The waiting period of the thread will depend upon the time specified by the user as a parameter of sleep() method.</p>
    <p><strong>Example:</strong></p>
    <div class="code-block">
      <div class="code-header"><span class="code-filename">SleepExample.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-type">Thread</span>.<span class="hl-method">sleep</span>(<span class="hl-number">1000</span>); <span class="hl-comment">//Thread will wait here for 1 second.</span>
      </code></pre>
    </div>
    <p>It is throwing a checked Exception i.e InterruptedException because there may be chance at runtime, this sleeping thread may be interrupted by a thread so provide either try-catch or declare the method as throws.</p>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">SleepDemo1.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.sleep;
        <span class="hl-keyword">class</span> <span class="hl-type">Test</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i=<span class="hl-number">1</span>; i&lt;=<span class="hl-number">10</span>; i++) {
                    <span class="hl-type">IO</span>.println(i+<span class="hl-string">" by "</span>+name+<span class="hl-string">" thread"</span>);
                    <span class="hl-keyword">try</span> {
                        <span class="hl-type">Thread</span>.<span class="hl-method">sleep</span>(<span class="hl-number">1000</span>); <span class="hl-comment">//1 sec thread will wait</span>
                    } <span class="hl-keyword">catch</span>(<span class="hl-type">InterruptedException</span> e) {
                        <span class="hl-type">System</span>.err.println(<span class="hl-string">"Thread is interrupted "</span>+e);
                    }
                }
            }
        }
        
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">SleepDemo1</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">IO</span>.println(<span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>()+<span class="hl-string">" thread is running"</span>);
                <span class="hl-type">Test</span> t1 = <span class="hl-keyword">new</span> <span class="hl-type">Test</span>();
                t1.<span class="hl-method">setName</span>(<span class="hl-string">"Child1"</span>);
                t1.<span class="hl-method">start</span>();
            }
        }
      </code></pre>
    </div>

    <div class="code-block">
      <div class="code-header"><span class="code-filename">SleepDemo2.java</span><button class="copy-btn" onclick="copyCode(this)"><i class="fas fa-copy"></i></button></div>
      <pre><code>
        <span class="hl-keyword">package</span> com.ravi.sleep;
        <span class="hl-keyword">class</span> <span class="hl-type">Foo</span> <span class="hl-keyword">extends</span> <span class="hl-type">Thread</span> {
            <span class="hl-keyword">@Override</span>
            <span class="hl-keyword">public</span> <span class="hl-keyword">void</span> <span class="hl-method">run</span>() {
                String name = <span class="hl-type">Thread</span>.<span class="hl-method">currentThread</span>().<span class="hl-method">getName</span>();
                <span class="hl-keyword">for</span>(<span class="hl-type">int</span> i=<span class="hl-number">1</span>; i&lt;=<span class="hl-number">5</span>; i++) {
                    <span class="hl-type">IO</span>.println(i+<span class="hl-string">" by "</span>+name+<span class="hl-string">" thread"</span>);
                    <span class="hl-keyword">try</span> {
                        <span class="hl-type">Thread</span>.<span class="hl-method">sleep</span>(<span class="hl-number">1000</span>, <span class="hl-number">2000</span>);
                    } <span class="hl-keyword">catch</span>(<span class="hl-type">InterruptedException</span> e) { }
                }
            }
        }
        
        <span class="hl-keyword">public</span> <span class="hl-keyword">class</span> <span class="hl-type">SleepDemo2</span> {
            <span class="hl-keyword">public</span> <span class="hl-keyword">static</span> <span class="hl-keyword">void</span> <span class="hl-method">main</span>(String[] args) {
                <span class="hl-type">Foo</span> f1 = <span class="hl-keyword">new</span> <span class="hl-type">Foo</span>();
                <span class="hl-type">Foo</span> f2 = <span class="hl-keyword">new</span> <span class="hl-type">Foo</span>();
                
                f1.<span class="hl-method">setName</span>(<span class="hl-string">"Thread1"</span>);
                f2.<span class="hl-method">setName</span>(<span class="hl-string">"Thread2"</span>);
                
                f1.<span class="hl-method">start</span>();
                f2.<span class="hl-method">start</span>();
            }
        }
      </code></pre>
    </div>

    <hr>

    <h2>Life Cycle of a Thread</h2>
    <p>As we know a thread is well known for Independent execution and it contains a life cycle which internally contains <strong>5 states (Phases)</strong>. During the life cycle of a thread, It can pass from these 5 states. At a time a thread can reside to only one state of the given 5 states.</p>
    <ol>
      <li><strong>NEW State</strong> (Born state)</li>
      <li><strong>RUNNABLE state</strong> (Ready to Run state)</li>
      <li><strong>RUNNING state</strong></li>
      <li><strong>WAITING state</strong></li>
      <li><strong>Dead state</strong></li>
    </ol>

    <div class="img-block">
        <img src="/Public/Images/threadLifeCycle.png" width="100%" alt="Thread Life Cycle"class="img-responsive">
        <img src="/Public/Images/detaildedThreadLifeCycle.png" width="20%" alt="Thread Life Cycle" class="detailedThreadLifeCycle" onclick="openThreadModal()" title="Click to view detailed life cycle of thread">
    </div>

    <div id="threadModal" class="threadModal">
        <span onclick="closeThreadModal()">&times;</span>
        <img src="/Public/Images/detaildedThreadLifeCycle.png">
    </div>
  `
  }
];

export default topicsData;