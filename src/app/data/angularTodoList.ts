import type { Todo } from '../pages/home/home';

export const learningTodoList: Todo[] = [
    // --- 阶段一：TypeScript 基础 (硬性门槛) ---
    {
      id: 'ts-01',
      title: 'TypeScript: Interface (接口) 与 Type (类型别名) 的区别',
      completed: false
    },
    {
      id: 'ts-02',
      title: 'TypeScript: Generics (泛型) 的理解与使用',
      completed: false
    },
    {
      id: 'ts-03',
      title: 'TypeScript: Decorators (装饰器 @Component, @Input) 原理',
      completed: false
    },
    {
      id: 'ts-04',
      title: 'TypeScript: Class (类) 结构与构造函数 (constructor)',
      completed: false
    },
  
    // --- 阶段二：核心概念与组件 (入门) ---
    {
      id: 'core-01',
      title: 'Angular CLI: 掌握 ng new 和 ng generate component',
      completed: false
    },
    {
      id: 'core-02',
      title: '架构: Standalone Components (独立组件) 与 imports 数组',
      completed: false
    },
    {
      id: 'core-03',
      title: '模板语法: 控制流 (@if, @for, @switch)',
      completed: false
    },
    {
      id: 'core-04',
      title: '模板语法: 属性绑定 [prop] 与 事件绑定 (event)',
      completed: false
    },
    {
      id: 'core-05',
      title: '组件通信: @Input() (Props) 与 @Output() (Emits)',
      completed: false
    },
    {
      id: 'core-06',
      title: '生命周期: ngOnInit (初始化) 与 ngOnDestroy (清理)',
      completed: false
    },
  
    // --- 阶段三：响应式编程 (Signals) & 服务 ---
    {
      id: 'signal-01',
      title: 'Signals: signal() 创建可写信号',
      completed: false
    },
    {
      id: 'signal-02',
      title: 'Signals: computed() 创建计算信号',
      completed: false
    },
    {
      id: 'signal-03',
      title: 'Signals: effect() 处理副作用',
      completed: false
    },
    {
      id: 'di-01',
      title: '依赖注入: Service 创建 (@Injectable) 与 constructor 注入',
      completed: false
    },
    {
      id: 'http-01',
      title: 'HTTP: HttpClient 的使用与 Interceptors (拦截器)',
      completed: false
    },
  
    // --- 阶段四：RxJS (进阶难点) ---
    {
      id: 'rxjs-01',
      title: 'RxJS: Observable (流) 与 Subscription (订阅) 概念',
      completed: false
    },
    {
      id: 'rxjs-02',
      title: 'RxJS 操作符: map (转换) 与 tap (副作用)',
      completed: false
    },
    {
      id: 'rxjs-03',
      title: 'RxJS 操作符: switchMap (处理竞态/接口依赖)',
      completed: false
    },
    {
      id: 'rxjs-04',
      title: '模板管道: AsyncPipe (自动订阅/销毁流)',
      completed: false
    },
  
    // --- 阶段五：复杂业务构建 ---
    {
      id: 'router-01',
      title: '路由: Lazy Loading (懒加载) 配置',
      completed: false
    },
    {
      id: 'forms-01',
      title: '表单: Reactive Forms (FormControl, FormGroup, Validators)',
      completed: false
    },
    {
      id: 'perf-01',
      title: '性能: ChangeDetectionStrategy.OnPush (变更检测策略)',
      completed: false
    }
  ];