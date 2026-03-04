# DIAGNÓSTICO TÉCNICO (FASE 1)

## Propósito

Documentar el estado actual de los procesos digitales y documentales vinculados a la operación con CASEWARE, con enfoque en control de accesos, trazabilidad y riesgos de seguridad.

## Evaluación General

Durante la revisión se identificaron los siguientes puntos:

- Dependencia de configuraciones individuales de usuario.
- Ausencia de bitácora centralizada de eventos y accesos.
- Falta de trazabilidad estructurada de modificaciones documentales.
- Riesgo de dispersión de versiones de documentos.
- Necesidad de control adicional sobre descargas y consultas.

## Riesgos Identificados

1. Accesos no auditados de forma centralizada.
2. Modificaciones sin registro histórico consolidado.
3. Dependencia operativa de múltiples repositorios documentales.
4. Vulnerabilidad ante pérdida o alteración de documentos críticos.

## Requerimientos Detectados

- Implementar control de roles y permisos centralizados.
- Registrar eventos en bitácora (login, carga, modificación, descarga).
- Establecer sistema de versionado documental.
- Generar reportes de actividad por usuario.
- Incorporar mecanismos básicos de integridad (hash o validación).

## Conclusión Técnica

Se recomienda diseñar e implementar una plataforma complementaria de gestión y seguridad documental que opere como capa adicional sobre los flujos documentales asociados a CASEWARE.
