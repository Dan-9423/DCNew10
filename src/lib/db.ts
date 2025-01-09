import { supabase } from './supabase';
import type { Database } from '@/types/supabase';
import { Customer } from '@/types/customer';

export async function getCustomers(): Promise<Customer[]> {
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .order('razao_social');

  if (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }

  return data.map(customer => ({
    id: customer.id,
    razaoSocial: customer.razao_social,
    nomeFantasia: customer.nome_fantasia || '',
    cnpj: customer.cnpj,
    email: customer.email,
    telefone: customer.telefone || undefined,
    endereco: customer.endereco_logradouro ? {
      logradouro: customer.endereco_logradouro,
      numero: customer.endereco_numero || '',
      complemento: customer.endereco_complemento,
      bairro: customer.endereco_bairro || '',
      cidade: customer.endereco_cidade || '',
      estado: customer.endereco_estado || '',
      cep: customer.endereco_cep || ''
    } : undefined
  }));
}

export async function addCustomer(customer: Omit<Customer, 'id'>): Promise<Customer> {
  const { data, error } = await supabase
    .from('customers')
    .insert({
      razao_social: customer.razaoSocial,
      nome_fantasia: customer.nomeFantasia,
      cnpj: customer.cnpj,
      email: customer.email,
      telefone: customer.telefone,
      endereco_logradouro: customer.endereco?.logradouro,
      endereco_numero: customer.endereco?.numero,
      endereco_complemento: customer.endereco?.complemento,
      endereco_bairro: customer.endereco?.bairro,
      endereco_cidade: customer.endereco?.cidade,
      endereco_estado: customer.endereco?.estado,
      endereco_cep: customer.endereco?.cep
    })
    .select()
    .single();

  if (error) {
    console.error('Error adding customer:', error);
    throw error;
  }

  return {
    id: data.id,
    razaoSocial: data.razao_social,
    nomeFantasia: data.nome_fantasia || '',
    cnpj: data.cnpj,
    email: data.email,
    telefone: data.telefone || undefined,
    endereco: data.endereco_logradouro ? {
      logradouro: data.endereco_logradouro,
      numero: data.endereco_numero || '',
      complemento: data.endereco_complemento,
      bairro: data.endereco_bairro || '',
      cidade: data.endereco_cidade || '',
      estado: data.endereco_estado || '',
      cep: data.endereco_cep || ''
    } : undefined
  };
}

export async function updateCustomer(id: string, customer: Partial<Customer>): Promise<void> {
  const { error } = await supabase
    .from('customers')
    .update({
      razao_social: customer.razaoSocial,
      nome_fantasia: customer.nomeFantasia,
      cnpj: customer.cnpj,
      email: customer.email,
      telefone: customer.telefone,
      endereco_logradouro: customer.endereco?.logradouro,
      endereco_numero: customer.endereco?.numero,
      endereco_complemento: customer.endereco?.complemento,
      endereco_bairro: customer.endereco?.bairro,
      endereco_cidade: customer.endereco?.cidade,
      endereco_estado: customer.endereco?.estado,
      endereco_cep: customer.endereco?.cep
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating customer:', error);
    throw error;
  }
}

export async function deleteCustomer(id: string): Promise<void> {
  const { error } = await supabase
    .from('customers')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting customer:', error);
    throw error;
  }
}