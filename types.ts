
import React from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
