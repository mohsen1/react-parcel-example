declare module '*.svg';
declare module '*.css';

interface NodeModule {
        hot?: {
                accept(moduleId?: string): void;
        }
}
