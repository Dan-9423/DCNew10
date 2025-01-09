export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          razao_social: string
          nome_fantasia: string | null
          cnpj: string
          email: string
          telefone: string | null
          endereco_logradouro: string | null
          endereco_numero: string | null
          endereco_complemento: string | null
          endereco_bairro: string | null
          endereco_cidade: string | null
          endereco_estado: string | null
          endereco_cep: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          razao_social: string
          nome_fantasia?: string | null
          cnpj: string
          email: string
          telefone?: string | null
          endereco_logradouro?: string | null
          endereco_numero?: string | null
          endereco_complemento?: string | null
          endereco_bairro?: string | null
          endereco_cidade?: string | null
          endereco_estado?: string | null
          endereco_cep?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          razao_social?: string
          nome_fantasia?: string | null
          cnpj?: string
          email?: string
          telefone?: string | null
          endereco_logradouro?: string | null
          endereco_numero?: string | null
          endereco_complemento?: string | null
          endereco_bairro?: string | null
          endereco_cidade?: string | null
          endereco_estado?: string | null
          endereco_cep?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      task_lists: {
        Row: {
          id: string
          name: string
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          list_id: string
          content: string
          completed: boolean
          created_at: string
          completed_at: string | null
          user_id: string
        }
        Insert: {
          id?: string
          list_id: string
          content: string
          completed?: boolean
          created_at?: string
          completed_at?: string | null
          user_id: string
        }
        Update: {
          id?: string
          list_id?: string
          content?: string
          completed?: boolean
          created_at?: string
          completed_at?: string | null
          user_id?: string
        }
      }
      notes: {
        Row: {
          id: string
          list_id: string
          title: string
          content: string | null
          status: string
          created_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          id?: string
          list_id: string
          title: string
          content?: string | null
          status?: string
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          id?: string
          list_id?: string
          title?: string
          content?: string | null
          status?: string
          created_at?: string
          updated_at?: string
          user_id?: string
        }
      }
      email_templates: {
        Row: {
          id: string
          version: string
          subject: string
          content: string
          is_active: boolean
          created_at: string
          user_id: string
        }
        Insert: {
          id?: string
          version: string
          subject: string
          content: string
          is_active?: boolean
          created_at?: string
          user_id: string
        }
        Update: {
          id?: string
          version?: string
          subject?: string
          content?: string
          is_active?: boolean
          created_at?: string
          user_id?: string
        }
      }
      email_history: {
        Row: {
          id: string
          customer_id: string | null
          subject: string
          content: string
          status: string
          sent_at: string | null
          created_at: string
          user_id: string
          numero_nf: string | null
          valor_total: number | null
        }
        Insert: {
          id?: string
          customer_id?: string | null
          subject: string
          content: string
          status?: string
          sent_at?: string | null
          created_at?: string
          user_id: string
          numero_nf?: string | null
          valor_total?: number | null
        }
        Update: {
          id?: string
          customer_id?: string | null
          subject?: string
          content?: string
          status?: string
          sent_at?: string | null
          created_at?: string
          user_id?: string
          numero_nf?: string | null
          valor_total?: number | null
        }
      }
      email_attachments: {
        Row: {
          id: string
          email_id: string
          name: string
          size: number
          type: string
          path: string
          created_at: string
        }
        Insert: {
          id?: string
          email_id: string
          name: string
          size: number
          type: string
          path: string
          created_at?: string
        }
        Update: {
          id?: string
          email_id?: string
          name?: string
          size?: number
          type?: string
          path?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}