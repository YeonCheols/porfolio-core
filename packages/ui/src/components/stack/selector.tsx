'use client';

import { useState, useEffect, useRef } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { cn, StackSelectorProps, StackTag, StackType } from '../..';
import { useFormContext } from 'react-hook-form';

function StackSelector<T extends StackType>({
  stacks,
  name,
  label = '기술 스택',
  className = '',
  maxStacks = 10,
  placeholder = '스택 검색...',
}: StackSelectorProps<T>) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStacks, setSelectedStacks] = useState<Array<StackType>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentValue = watch(name);

  // 초기값 설정
  useEffect(() => {
    if (currentValue) {
      try {
        const stacksArray = JSON.parse(currentValue);
        const stackObjects = stacksArray.map((stackName: string) => {
          const stack = stacks.find(s => s.name === stackName);
          return stack || { name: stackName, icon: '', color: '' };
        });
        setSelectedStacks(stackObjects);
      } catch {
        console.info('Failed to parse stacks');
      }
    }
  }, [currentValue, stacks]);

  // 스택 추가
  const addStack = (stack: { name: string; icon: string; color: string }) => {
    if (selectedStacks.length >= maxStacks) {
      alert(`최대 ${maxStacks}개의 스택만 선택할 수 있습니다.`);
      return;
    }

    if (!selectedStacks.find(s => s.name === stack.name)) {
      const newStacks = [...selectedStacks, stack];
      setSelectedStacks(newStacks);
      setValue(name, JSON.stringify(newStacks.map(s => s.name)));
    }
    setSearchTerm('');
    setIsOpen(false);
  };

  // 스택 제거
  const removeStack = (stackName: string) => {
    const newStacks = selectedStacks.filter(s => s.name !== stackName);
    setSelectedStacks(newStacks);
    setValue(name, JSON.stringify(newStacks.map(s => s.name)));
  };

  // 필터링된 스택 목록
  const filteredStacks = stacks.filter(
    stack =>
      stack.name.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedStacks.find(s => s.name === stack.name),
  );

  console.log('selectedStacks', selectedStacks);

  return (
    <div className={cn('space-y-2', className)}>
      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}

      {/* 숨겨진 입력 필드 */}
      <input {...register(name)} type="hidden" />

      {/* 선택된 스택 태그들 */}
      <div className="flex flex-wrap gap-2 min-h-[40px] p-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600">
        {selectedStacks.map(stack => (
          <div
            key={stack.name}
            className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-sm"
          >
            <StackTag name={stack.name} icon={stack.icon} color={stack.color} size={14} />
            <button
              type="button"
              onClick={() => removeStack(stack.name)}
              className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            >
              ×
            </button>
          </div>
        ))}

        {selectedStacks.length < maxStacks && (
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <button type="button" className="h-8 px-3 text-sm" onClick={() => setIsOpen(true)}>
                + 스택 추가
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="start">
              <div className="p-3 border-b">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={placeholder}
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="max-h-60 overflow-y-auto">
                {filteredStacks.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    {searchTerm ? '검색 결과가 없습니다.' : '사용 가능한 스택이 없습니다.'}
                  </div>
                ) : (
                  <div className="p-2">
                    {filteredStacks.map(stack => (
                      <button
                        key={stack.name}
                        type="button"
                        onClick={() => addStack(stack)}
                        className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      >
                        <StackTag name={stack.name} icon={stack.icon} color={stack.color} size={16} showName />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>

      {/* 에러 메시지 */}
      {errors[name] && <p className="text-sm text-red-600 dark:text-red-400">{errors[name]?.message as string}</p>}

      {/* 선택된 스택 개수 표시 */}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {selectedStacks.length} / {maxStacks} 스택 선택됨
      </p>
    </div>
  );
}

export default StackSelector;
