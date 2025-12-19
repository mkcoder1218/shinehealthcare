import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <Globe size={18} className="text-slate-600" />
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'am')}
                className="bg-transparent border-none outline-none cursor-pointer text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="Language Selector"
            >
                <option value="en">English</option>
                <option value="am">አማርኛ</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
